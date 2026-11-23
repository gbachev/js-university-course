import { test, after } from 'node:test';
import assert from 'node:assert/strict';
import { start } from '../../lib/start.js';

// Our code from this folder, or the solution with npm run test:solutions.
const { createApp } = await import(
    process.env.SOLUTIONS ? '../solutions/02-cors-with-credentials.js' : './02-cors-with-credentials.js'
);

const servers = [];
after(() => Promise.all(servers.map((server) => server.close())));

async function startApp(pageOrigin) {
    const server = await start(createApp({ pageOrigin }));
    servers.push(server);
    return server.url;
}

test('GET /books answers with the page origin and Allow-Credentials: true', async () => {
    const url = await startApp('http://localhost:5173');
    const response = await fetch(`${url}/books`, { headers: { Origin: 'http://localhost:5173' } });

    assert.equal(response.status, 200);
    assert.equal(response.headers.get('access-control-allow-origin'), 'http://localhost:5173');
    assert.equal(response.headers.get('access-control-allow-credentials'), 'true');
    assert.deepEqual(await response.json(), [{ key: 'dune', title: 'Dune', author: 'Frank Herbert' }]);
});

test('a preflight gets 204, the page origin, credentials and Max-Age: 600', async () => {
    const url = await startApp('http://localhost:5173');
    const response = await fetch(`${url}/books`, {
        method: 'OPTIONS',
        headers: { Origin: 'http://localhost:5173', 'Access-Control-Request-Method': 'DELETE' },
    });

    assert.equal(response.status, 204);
    assert.equal(response.headers.get('access-control-allow-origin'), 'http://localhost:5173');
    assert.equal(response.headers.get('access-control-allow-credentials'), 'true');
    assert.equal(response.headers.get('access-control-max-age'), '600');
    assert.match(response.headers.get('access-control-allow-methods') ?? '', /DELETE/i);
});

test('the origin comes from the config', async () => {
    const url = await startApp('https://books.example');
    const response = await fetch(`${url}/books`, { headers: { Origin: 'https://books.example' } });

    assert.equal(response.headers.get('access-control-allow-origin'), 'https://books.example');
    assert.equal(response.headers.get('access-control-allow-credentials'), 'true');
});

test("no answer says '*', whoever asks", async () => {
    const url = await startApp('http://localhost:5173');

    for (const origin of ['http://localhost:5173', 'https://evil.example']) {
        const response = await fetch(`${url}/books`, { headers: { Origin: origin } });
        assert.equal(response.headers.get('access-control-allow-origin'), 'http://localhost:5173');
    }
    const response = await fetch(`${url}/books`);
    assert.equal(response.headers.get('access-control-allow-origin'), 'http://localhost:5173');
});
