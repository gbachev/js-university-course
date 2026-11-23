import assert from 'node:assert/strict';
import { afterEach, beforeEach, test } from 'node:test';
import { addApplication, send, signUp, startApp } from './helpers.js';

let app;
let cookie;
beforeEach(async () => {
    app = await startApp();
    cookie = await signUp(app);
});
afterEach(() => app.close());

test('SQL in a value is stored as text, and the table still works', async () => {
    const company = "'); DROP TABLE applications; --";
    const { response, body } = await addApplication(app, cookie, { company });

    assert.equal(response.status, 201);
    assert.equal(body.application.company, company);

    const list = await send(`${app.url}/api/applications`, { cookie });
    const { applications } = await list.json();
    assert.deepEqual(
        applications.map((item) => item.company),
        [company],
    );
    const more = await addApplication(app, cookie, { company: 'Globex' });
    assert.equal(more.response.status, 201);
});

test('a POST from a page on another site answers 403', async () => {
    const response = await fetch(`${app.url}/api/applications`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Cookie: cookie,
            Origin: 'https://evil.example',
        },
        body: JSON.stringify({ company: 'Evil', role: 'Attacker' }),
    });

    assert.equal(response.status, 403);
    assert.deepEqual(await response.json(), {
        error: 'Requests from other sites are not allowed',
    });
    assert.equal(
        app.db.prepare('SELECT COUNT(*) AS count FROM applications').get()
            .count,
        0,
    );
});

test('a POST with our own Origin is allowed', async () => {
    const response = await fetch(`${app.url}/api/applications`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Cookie: cookie,
            Origin: app.url,
        },
        body: JSON.stringify({ company: 'Acme', role: 'Developer' }),
    });

    assert.equal(response.status, 201);
});

test('a body that is not JSON answers 415', async () => {
    // A string body without a Content-Type goes out as text/plain, the way a
    // form on another site could send it.
    const response = await fetch(`${app.url}/api/applications`, {
        method: 'POST',
        headers: { Cookie: cookie },
        body: '{"company":"Acme","role":"Developer"}',
    });

    assert.equal(response.status, 415);
    assert.deepEqual(await response.json(), {
        error: 'Send the body as JSON (application/json)',
    });
});

test('broken JSON answers 400, not 500', async () => {
    const response = await fetch(`${app.url}/api/applications`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Cookie: cookie },
        body: '{"company":',
    });

    assert.equal(response.status, 400);
    assert.deepEqual(await response.json(), {
        error: 'The body is not valid JSON',
    });
});

test('an unknown /api path answers a JSON 404', async () => {
    const response = await send(`${app.url}/api/jobs`, { cookie });

    assert.equal(response.status, 404);
    assert.match(response.headers.get('content-type'), /^application\/json/);
    assert.deepEqual(await response.json(), {
        error: 'No route for GET /api/jobs',
    });
});

test('the answers do not say which framework we run', async () => {
    const response = await send(`${app.url}/api/auth/me`, { cookie });
    assert.equal(response.headers.get('x-powered-by'), null);
});

test('behind the proxy in production, our https origin is allowed', async () => {
    const production = await startApp({ NODE_ENV: 'production' });
    const { host } = new URL(production.url);
    const signup = (headers) =>
        fetch(`${production.url}/api/auth/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Origin: `https://${host}`,
                ...headers,
            },
            body: JSON.stringify({
                email: 'ada@example.com',
                password: 'correct horse',
            }),
        });
    try {
        // Without the proxy's header, the request looks like plain http.
        assert.equal((await signup({})).status, 403);
        const response = await signup({ 'X-Forwarded-Proto': 'https' });
        assert.equal(response.status, 201);
        assert.match(response.headers.getSetCookie()[0], /; Secure/);
    } finally {
        await production.close();
    }
});

test('a bug answers 500 with a short message and no details', async () => {
    // A closed database makes the next query throw, like a real failure would.
    app.db.close();
    const response = await send(`${app.url}/api/auth/me`, { cookie });

    assert.equal(response.status, 500);
    assert.deepEqual(await response.json(), { error: 'Something went wrong' });
});
