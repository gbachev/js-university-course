import { test, after } from 'node:test';
import assert from 'node:assert/strict';
import { start } from '../../lib/start.js';

// Our code from this folder, or the solution with npm run test:solutions.
const { createApp } = await import(
    process.env.SOLUTIONS ? '../solutions/01-books-list.js' : './01-books-list.js'
);

const books = [
    { title: 'Dune', author: 'Frank Herbert' },
    { title: 'Emma', author: 'Jane Austen' },
    { title: 'Neuromancer', author: 'William Gibson' },
];

const server = await start(createApp(books));
after(() => server.close());

test('GET /books answers 200 with the books as JSON', async () => {
    const response = await fetch(`${server.url}/books`);

    assert.equal(response.status, 200);
    assert.match(response.headers.get('content-type'), /^application\/json/);
    assert.deepEqual(await response.json(), books);
});

test('GET /books/count answers with the number of books', async () => {
    const response = await fetch(`${server.url}/books/count`);

    assert.equal(response.status, 200);
    assert.match(response.headers.get('content-type'), /^application\/json/);
    assert.deepEqual(await response.json(), { count: 3 });
});

test('the app answers with the books it was given', async (t) => {
    const empty = await start(createApp([]));
    t.after(() => empty.close());

    const response = await fetch(`${empty.url}/books/count`);

    assert.equal(response.status, 200);
    assert.deepEqual(await response.json(), { count: 0 });
});

test('an unknown path answers 404', async () => {
    const response = await fetch(`${server.url}/authors`);

    assert.equal(response.status, 404);
});

test('POST /books answers 404, because only GET has a route', async () => {
    const response = await fetch(`${server.url}/books`, { method: 'POST' });

    assert.equal(response.status, 404);
});
