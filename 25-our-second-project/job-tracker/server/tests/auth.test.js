import assert from 'node:assert/strict';
import { afterEach, beforeEach, test } from 'node:test';
import { cookieFrom, send, signUp, startApp } from './helpers.js';

let app;
beforeEach(async () => {
    app = await startApp();
});
afterEach(() => app.close());

const login = (email, password) =>
    send(`${app.url}/api/auth/login`, {
        method: 'POST',
        body: { email, password },
    });

const me = (cookie) => send(`${app.url}/api/auth/me`, { cookie });

test('sign-up answers 201 with the user and an HttpOnly, SameSite=Lax cookie', async () => {
    const response = await send(`${app.url}/api/auth/signup`, {
        method: 'POST',
        body: { email: '  Ada@Example.com ', password: 'correct horse' },
    });

    assert.equal(response.status, 201);
    assert.deepEqual(await response.json(), {
        user: { id: 1, email: 'ada@example.com' },
    });
    const [setCookie] = response.headers.getSetCookie();
    assert.match(setCookie, /^sid=[\w-]{43};/);
    assert.match(setCookie, /; HttpOnly/);
    assert.match(setCookie, /; SameSite=Lax/);
    assert.match(setCookie, /; Path=\//);
    assert.match(setCookie, /; Max-Age=604800/);
    // Outside production the cookie is not Secure: some browsers drop a Secure
    // cookie on http://localhost.
    assert.doesNotMatch(setCookie, /Secure/);
});

test('the cookie is Secure when cookieSecure is true', async () => {
    const secureApp = await startApp({ COOKIE_SECURE: 'true' });
    try {
        const response = await send(`${secureApp.url}/api/auth/signup`, {
            method: 'POST',
            body: { email: 'ada@example.com', password: 'correct horse' },
        });
        assert.match(response.headers.getSetCookie()[0], /; Secure/);
    } finally {
        await secureApp.close();
    }
});

test('the database keeps a hash of the token, not the token itself', async () => {
    const cookie = await signUp(app);
    const token = cookie.split('=')[1];
    const { id } = app.db.prepare('SELECT id FROM sessions').get();

    assert.notEqual(id, token);
    assert.match(id, /^[0-9a-f]{64}$/);
});

test('/me answers with the user of the cookie', async () => {
    const cookie = await signUp(app);
    const response = await me(cookie);

    assert.equal(response.status, 200);
    assert.deepEqual(await response.json(), {
        user: { id: 1, email: 'ada@example.com' },
    });
});

test('/me without a cookie answers 401 with WWW-Authenticate', async () => {
    const response = await me();

    assert.equal(response.status, 401);
    assert.equal(
        response.headers.get('www-authenticate'),
        'Session realm="job-tracker"',
    );
    assert.deepEqual(await response.json(), { error: 'Log in to continue' });
});

test('/me with a made-up token answers 401', async () => {
    const response = await me('sid=not-a-real-token');
    assert.equal(response.status, 401);
});

test('log-out deletes the session: the old cookie no longer works', async () => {
    const cookie = await signUp(app);
    const response = await send(`${app.url}/api/auth/logout`, {
        method: 'POST',
        cookie,
    });

    assert.equal(response.status, 204);
    assert.match(
        response.headers.getSetCookie()[0],
        /^sid=;.*Expires=Thu, 01 Jan 1970/,
    );
    assert.equal(
        app.db.prepare('SELECT COUNT(*) AS count FROM sessions').get().count,
        0,
    );
    assert.equal((await me(cookie)).status, 401);
});

test('log-out without a session still answers 204', async () => {
    const response = await send(`${app.url}/api/auth/logout`, {
        method: 'POST',
    });
    assert.equal(response.status, 204);
});

test('an expired session is refused and deleted', async () => {
    const cookie = await signUp(app);
    app.db
        .prepare('UPDATE sessions SET expires_at = ?')
        .run(new Date(Date.now() - 1000).toISOString());

    const response = await me(cookie);

    assert.equal(response.status, 401);
    assert.equal(
        app.db.prepare('SELECT COUNT(*) AS count FROM sessions').get().count,
        0,
    );
});

test('log-in with the right password answers 200 with a new session', async () => {
    await signUp(app);
    const response = await login('ADA@example.com', 'correct horse');

    assert.equal(response.status, 200);
    assert.deepEqual(await response.json(), {
        user: { id: 1, email: 'ada@example.com' },
    });
    assert.equal((await me(cookieFrom(response))).status, 200);
});

test('a wrong password and an unknown email get the very same answer', async () => {
    await signUp(app);
    const wrongPassword = await login('ada@example.com', 'wrong horse');
    const unknownEmail = await login('grace@example.com', 'correct horse');

    assert.equal(wrongPassword.status, 401);
    assert.equal(unknownEmail.status, 401);
    assert.equal(
        wrongPassword.headers.get('www-authenticate'),
        'Session realm="job-tracker"',
    );
    const wrongPasswordBody = await wrongPassword.text();
    assert.equal(wrongPasswordBody, await unknownEmail.text());
    assert.deepEqual(JSON.parse(wrongPasswordBody), {
        error: 'Wrong email or password',
    });
    assert.deepEqual(wrongPassword.headers.getSetCookie(), []);
});

test('a second sign-up with the same email, in any case, answers 409', async () => {
    await signUp(app, 'ada@example.com');
    const response = await send(`${app.url}/api/auth/signup`, {
        method: 'POST',
        body: { email: 'ADA@EXAMPLE.COM', password: 'another horse' },
    });

    assert.equal(response.status, 409);
    assert.deepEqual(await response.json(), {
        error: 'An account with this email exists',
    });
});

test('sign-up checks the email and the password', async () => {
    const response = await send(`${app.url}/api/auth/signup`, {
        method: 'POST',
        body: { email: 'not an email', password: 'short' },
    });

    assert.equal(response.status, 400);
    assert.deepEqual(await response.json(), {
        error: 'Check the highlighted fields',
        fields: {
            email: 'Enter an email address, like ada@example.com',
            password: 'Use 8 to 128 characters',
        },
    });
});
