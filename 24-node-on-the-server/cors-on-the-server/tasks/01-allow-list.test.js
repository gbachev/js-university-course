import { test, after } from 'node:test';
import assert from 'node:assert/strict';
import { start } from '../../lib/start.js';

// Our code from this folder, or the solution with npm run test:solutions.
const { createApp } = await import(
    process.env.SOLUTIONS ? '../solutions/01-allow-list.js' : './01-allow-list.js'
);

const page = 'http://localhost:8080';
const vite = 'http://localhost:5173';
const server = await start(createApp([page, vite]));
after(() => server.close());

// The names in a header such as 'Origin, Accept-Encoding', in lower case.
function names(value) {
    return (value ?? '').split(',').map((name) => name.trim().toLowerCase());
}

function preflight(origin) {
    return fetch(`${server.url}/books`, {
        method: 'OPTIONS',
        headers: {
            Origin: origin,
            'Access-Control-Request-Method': 'POST',
            'Access-Control-Request-Headers': 'content-type',
        },
    });
}

test('an origin on the list gets its own origin back, and Vary: Origin', async () => {
    for (const origin of [page, vite]) {
        const response = await fetch(`${server.url}/books`, { headers: { Origin: origin } });

        assert.equal(response.status, 200);
        assert.equal(response.headers.get('access-control-allow-origin'), origin);
        assert.ok(names(response.headers.get('vary')).includes('origin'), 'Vary has no Origin');
    }
});

test('an origin not on the list gets the books, no Allow-Origin, and Vary: Origin', async () => {
    const response = await fetch(`${server.url}/books`, { headers: { Origin: 'https://evil.example' } });

    assert.equal(response.status, 200);
    assert.equal(response.headers.get('access-control-allow-origin'), null);
    assert.ok(names(response.headers.get('vary')).includes('origin'), 'Vary has no Origin');
    assert.deepEqual(await response.json(), [{ key: 'dune', title: 'Dune', author: 'Frank Herbert' }]);
});

test('a request without an Origin header gets the books and no Allow-Origin', async () => {
    const response = await fetch(`${server.url}/books`);

    assert.equal(response.status, 200);
    assert.equal(response.headers.get('access-control-allow-origin'), null);
});

test('a preflight gets 204, no body and the CORS headers', async () => {
    const response = await preflight(page);

    assert.equal(response.status, 204);
    assert.equal(await response.text(), '');
    assert.equal(response.headers.get('access-control-allow-origin'), page);
    const methods = names(response.headers.get('access-control-allow-methods'));
    for (const method of ['get', 'post', 'delete']) {
        assert.ok(methods.includes(method), `Allow-Methods has no ${method.toUpperCase()}`);
    }
    assert.ok(
        names(response.headers.get('access-control-allow-headers')).includes('content-type'),
        'Allow-Headers has no Content-Type',
    );
    assert.equal(response.headers.get('access-control-max-age'), '600');
});

test('a preflight from an origin not on the list gets no Allow-Origin', async () => {
    const response = await preflight('https://evil.example');

    assert.equal(response.headers.get('access-control-allow-origin'), null);
});

test('a preflight never reaches the routes, not even on a path with no route', async () => {
    const response = await fetch(`${server.url}/authors`, {
        method: 'OPTIONS',
        headers: { Origin: page, 'Access-Control-Request-Method': 'GET' },
    });

    assert.equal(response.status, 204);
    assert.equal(await response.text(), '');
});

test('POST /books still answers 201, with Allow-Origin', async () => {
    const response = await fetch(`${server.url}/books`, {
        method: 'POST',
        headers: { Origin: page, 'Content-Type': 'application/json' },
        body: JSON.stringify({ key: 'emma', title: 'Emma', author: 'Jane Austen' }),
    });

    assert.equal(response.status, 201);
    assert.equal(response.headers.get('access-control-allow-origin'), page);
    assert.deepEqual(await response.json(), { key: 'emma', title: 'Emma', author: 'Jane Austen' });
});
