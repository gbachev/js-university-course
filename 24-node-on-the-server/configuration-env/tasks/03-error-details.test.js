import { test, after } from 'node:test';
import assert from 'node:assert/strict';
import { start } from '../../lib/start.js';

// Our code from this folder, or the solution with npm run test:solutions.
const { createApp } = await import(
    process.env.SOLUTIONS ? '../solutions/03-error-details.js' : './03-error-details.js'
);

const servers = [];
after(() => Promise.all(servers.map((server) => server.close())));

async function startApp(nodeEnv) {
    const server = await start(createApp({ port: 0, nodeEnv, apiKey: 'dev-key' }));
    servers.push(server);
    return server.url;
}

// Calls the route with the bug and checks the 500 and its JSON; gives back the text and the body.
async function getBug(url) {
    const response = await fetch(`${url}/books/stats`);
    assert.equal(response.status, 500);
    assert.match(response.headers.get('content-type') ?? '', /^application\/json/);
    const text = await response.text();
    const body = JSON.parse(text);
    assert.equal(typeof body.error, 'string');
    return { text, body };
}

// Runs fn with process.env.NODE_ENV set to value, then puts the old value back.
function withNodeEnv(value, fn) {
    const saved = process.env.NODE_ENV;
    process.env.NODE_ENV = value;
    try {
        return fn();
    } finally {
        if (saved === undefined) {
            delete process.env.NODE_ENV;
        } else {
            process.env.NODE_ENV = saved;
        }
    }
}

test("the app's env setting comes from config.nodeEnv, not process.env", () => {
    withNodeEnv('production', () => {
        assert.equal(createApp({ port: 0, nodeEnv: 'development', apiKey: 'dev-key' }).get('env'), 'development');
        assert.equal(createApp({ port: 0, nodeEnv: 'test', apiKey: 'dev-key' }).get('env'), 'test');
    });
    withNodeEnv('development', () => {
        assert.equal(createApp({ port: 0, nodeEnv: 'production', apiKey: 'dev-key' }).get('env'), 'production');
    });
});

test('in development the 500 has the error message in detail', async () => {
    const { body } = await getBug(await startApp('development'));

    assert.equal(body.detail, 'Connection to prices.internal:5432 refused');
});

test('in test the 500 has the error message in detail too', async () => {
    const { body } = await getBug(await startApp('test'));

    assert.equal(body.detail, 'Connection to prices.internal:5432 refused');
});

test('in production the 500 shows neither the message nor the stack trace', async () => {
    const { text, body } = await getBug(await startApp('production'));

    assert.deepEqual(Object.keys(body), ['error']);
    assert.ok(!text.includes('prices.internal'), text);
    assert.ok(!text.includes('    at '), text);
    assert.ok(!/\.js:\d+/.test(text), text);
});

test('production is read from config even when process.env.NODE_ENV is development', async () => {
    const app = withNodeEnv('development', () => createApp({ port: 0, nodeEnv: 'production', apiKey: 'dev-key' }));
    const server = await start(app);
    servers.push(server);

    const { body } = await getBug(server.url);
    assert.equal(body.detail, undefined);
});

test('the routes and the JSON 404 still work', async () => {
    const url = await startApp('production');

    const list = await fetch(`${url}/books`);
    assert.equal(list.status, 200);
    assert.deepEqual(await list.json(), [{ key: 'dune', title: 'Dune', author: 'Frank Herbert' }]);

    const missing = await fetch(`${url}/authors`);
    assert.equal(missing.status, 404);
    assert.deepEqual(await missing.json(), { error: 'No route for GET /authors' });
});
