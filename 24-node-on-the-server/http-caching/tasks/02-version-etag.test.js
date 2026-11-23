import { test, after } from 'node:test';
import assert from 'node:assert/strict';
import { start } from '../../lib/start.js';

// Our code from this folder, or the solution with npm run test:solutions.
const { createApp } = await import(
    process.env.SOLUTIONS ? '../solutions/02-version-etag.js' : './02-version-etag.js'
);

const server = await start(createApp());
after(() => server.close());

// cache: 'no-cache' keeps Node's fetch() from adding Cache-Control: no-cache to a request
// with our own If-None-Match, which would make Express answer 200.
function ask(path, ifNoneMatch) {
    return fetch(`${server.url}${path}`, {
        cache: 'no-cache',
        headers: { 'If-None-Match': ifNoneMatch },
    });
}

test('a book gets the strong ETag "v1" and the book', async () => {
    const response = await fetch(`${server.url}/books/emma`);

    assert.equal(response.status, 200);
    assert.equal(response.headers.get('etag'), '"v1"');
    assert.deepEqual(await response.json(), {
        key: 'emma',
        title: 'Emma',
        author: 'Jane Austen',
        version: 1,
    });
});

test('the same ETag gets 304 with no body, alone, in a list or with W/', async () => {
    for (const value of ['"v1"', '"v0", "v1"', 'W/"v1"']) {
        const response = await ask('/books/emma', value);

        assert.equal(response.status, 304, `If-None-Match: ${value} does not get 304`);
        assert.equal(await response.text(), '');
    }
});

test('another ETag gets 200 and the book', async () => {
    const response = await ask('/books/emma', '"v2"');

    assert.equal(response.status, 200);
    assert.equal(response.headers.get('etag'), '"v1"');
    assert.equal((await response.json()).title, 'Emma');
});

test('after a PATCH the ETag is "v2", and "v1" gets the changed book', async () => {
    const patched = await fetch(`${server.url}/books/dune`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: 'Dune Messiah' }),
    });
    assert.equal(patched.status, 200);
    await patched.text();

    const old = await ask('/books/dune', '"v1"');
    assert.equal(old.status, 200);
    assert.equal(old.headers.get('etag'), '"v2"');
    assert.deepEqual(await old.json(), {
        key: 'dune',
        title: 'Dune Messiah',
        author: 'Frank Herbert',
        version: 2,
    });

    const current = await ask('/books/dune', '"v2"');
    assert.equal(current.status, 304);
    await current.text();
});

test('an unknown key still gets the JSON 404', async () => {
    const response = await ask('/books/hobbit', '"v1"');

    assert.equal(response.status, 404);
    assert.deepEqual(await response.json(), { error: 'No book with the key hobbit' });
});
