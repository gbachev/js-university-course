// Shared by the test files. Not a test file itself: node --test only runs files
// whose names end in .test.js.
import { createApp } from '../src/app.js';
import { readConfig } from '../src/config.js';
import { migrate, openDatabase } from '../src/db.js';

// Starts the app on a free port (port 0) with a fresh database in memory, so every
// test begins with no users and no applications. `env` changes settings, for
// example { COOKIE_SECURE: 'true' }.
//
//   const app = await startApp();
//   after(() => app.close());
//   const response = await fetch(`${app.url}/api/auth/me`);
export async function startApp(env = {}) {
    const config = readConfig({
        NODE_ENV: 'test',
        DATABASE_PATH: ':memory:',
        ...env,
    });
    const db = openDatabase(config.databasePath);
    migrate(db);

    const server = createApp({ db, config }).listen(0);
    await new Promise((resolve, reject) => {
        server.once('listening', resolve);
        server.once('error', reject);
    });

    return {
        url: `http://localhost:${server.address().port}`,
        db,
        close: () =>
            new Promise((resolve) => {
                server.close(() => {
                    db.close();
                    resolve();
                });
                server.closeAllConnections();
            }),
    };
}

// fetch() with a JSON body and, when given, a session cookie.
export function send(url, { method = 'GET', body, cookie } = {}) {
    const headers = {};
    if (body !== undefined) {
        headers['Content-Type'] = 'application/json';
    }
    if (cookie) {
        headers.Cookie = cookie;
    }
    return fetch(url, {
        method,
        headers,
        body: body === undefined ? undefined : JSON.stringify(body),
    });
}

// "sid=Kq3x...; Max-Age=604800; Path=/; ..." -> "sid=Kq3x...", the part a
// browser sends back in its Cookie header.
export function cookieFrom(response) {
    const setCookie = response.headers.getSetCookie()[0];
    return setCookie.split(';')[0];
}

// Creates an account and gives back the cookie of its session.
export async function signUp(
    app,
    email = 'jane@example.com',
    password = 'correct horse',
) {
    const response = await send(`${app.url}/api/auth/signup`, {
        method: 'POST',
        body: { email, password },
    });
    if (response.status !== 201) {
        throw new Error(`Sign-up failed with ${response.status}`);
    }
    return cookieFrom(response);
}

// Adds an application for the user of `cookie` and gives back the parsed response.
export async function addApplication(app, cookie, values = {}) {
    const response = await send(`${app.url}/api/applications`, {
        method: 'POST',
        cookie,
        body: { company: 'Acme', role: 'Frontend Developer', ...values },
    });
    return { response, body: await response.json() };
}
