import { test, after } from 'node:test';
import assert from 'node:assert/strict';
import { start } from '../../lib/start.js';

// Our code from this folder, or the solution with npm run test:solutions.
const { createApp } = await import(
    process.env.SOLUTIONS ? '../solutions/01-cache-per-route.js' : './01-cache-per-route.js'
);

const server = await start(createApp());
after(() => server.close());

// The directives of a Cache-Control header, in lower case and sorted.
function directives(response) {
    const value = response.headers.get('cache-control');
    assert.ok(value, 'no Cache-Control header');
    return value
        .split(',')
        .map((directive) => directive.trim().toLowerCase())
        .sort();
}

// Asks again with an ETag. cache: 'no-cache' keeps Node's fetch() from adding
// Cache-Control: no-cache to our request, which would make Express answer 200.
function askAgain(path, etag) {
    return fetch(`${server.url}${path}`, { cache: 'no-cache', headers: { 'If-None-Match': etag } });
}

test('GET /books: public, max-age=300 and the list', async () => {
    const response = await fetch(`${server.url}/books`);

    assert.equal(response.status, 200);
    assert.deepEqual(directives(response), ['max-age=300', 'public']);
    assert.equal((await response.json()).length, 2);
});

test('GET /me/books: private, no-cache and one book', async () => {
    const response = await fetch(`${server.url}/me/books`);

    assert.equal(response.status, 200);
    assert.deepEqual(directives(response), ['no-cache', 'private']);
    assert.deepEqual(await response.json(), [{ key: 'dune', title: 'Dune', author: 'Frank Herbert' }]);
});

test('GET /health: no-store only', async () => {
    const response = await fetch(`${server.url}/health`);

    assert.equal(response.status, 200);
    assert.deepEqual(directives(response), ['no-store']);
    assert.deepEqual(await response.json(), { status: 'ok' });
});

test('GET /books and GET /me/books answer 304, with no body, to their own ETag', async () => {
    for (const path of ['/books', '/me/books']) {
        const first = await fetch(`${server.url}${path}`);
        await first.text();
        const etag = first.headers.get('etag');
        assert.ok(etag, `${path} sends no ETag`);

        const again = await askAgain(path, etag);
        assert.equal(again.status, 304, `${path} does not answer 304`);
        assert.equal(await again.text(), '');
    }
});
