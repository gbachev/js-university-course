import { test, after } from 'node:test';
import assert from 'node:assert/strict';
import { start } from '../../lib/start.js';

// Our code from this folder, or the solution with npm run test:solutions.
const { createApp } = await import(
    process.env.SOLUTIONS ? '../solutions/03-resources-not-verbs.js' : './03-resources-not-verbs.js'
);

const servers = [];
after(() => Promise.all(servers.map((server) => server.close())));

// Every test gets its own app with its own copy of the books.
async function startWithBooks() {
    const books = [
        { key: 'dune', title: 'Dune', author: 'Frank Herbert' },
        { key: 'emma', title: 'Emma', author: 'Jane Austen' },
    ];
    const server = await start(createApp(books));
    servers.push(server);
    return { books, url: server.url };
}

function sendJson(url, method, body) {
    return fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
    });
}

async function assertJsonError(response, status) {
    assert.equal(response.status, status);
    assert.match(response.headers.get('content-type') ?? '', /^application\/json/);
    assert.equal(typeof (await response.json()).error, 'string');
}

test('GET /books/:key answers 200 with the book, or 404 with an error', async () => {
    const { books, url } = await startWithBooks();

    const found = await fetch(`${url}/books/emma`);
    assert.equal(found.status, 200);
    assert.match(found.headers.get('content-type') ?? '', /^application\/json/);
    assert.deepEqual(await found.json(), books[1]);

    await assertJsonError(await fetch(`${url}/books/hobbit`), 404);
});

test('PUT /books/:key replaces the book in its place and answers 200', async () => {
    const { books, url } = await startWithBooks();
    const response = await sendJson(`${url}/books/dune`, 'PUT', {
        key: 'other',
        title: 'Dune',
        author: 'F. Herbert',
        year: 1965,
    });
    const replaced = { key: 'dune', title: 'Dune', author: 'F. Herbert' };

    assert.equal(response.status, 200);
    assert.deepEqual(await response.json(), replaced);
    assert.deepEqual(books[0], replaced);
    assert.equal(books.length, 2);
});

test('PUT /books/:key answers 400 without title or author, and 404 for no book', async () => {
    const { books, url } = await startWithBooks();

    await assertJsonError(await sendJson(`${url}/books/dune`, 'PUT', { title: 'Dune' }), 400);
    await assertJsonError(await sendJson(`${url}/books/dune`, 'PUT', { title: '', author: 'F. Herbert' }), 400);
    assert.deepEqual(books[0], { key: 'dune', title: 'Dune', author: 'Frank Herbert' });

    await assertJsonError(
        await sendJson(`${url}/books/hobbit`, 'PUT', { title: 'The Hobbit', author: 'J. R. R. Tolkien' }),
        404,
    );
    assert.equal(books.length, 2);
});

test('PATCH /books/:key changes only what it gets and answers 200 with the book', async () => {
    const { books, url } = await startWithBooks();
    const response = await sendJson(`${url}/books/emma`, 'PATCH', { title: 'Emma.', author: '' });
    const changed = { key: 'emma', title: 'Emma.', author: 'Jane Austen' };

    assert.equal(response.status, 200);
    assert.deepEqual(await response.json(), changed);
    assert.deepEqual(books[1], changed);

    await assertJsonError(await sendJson(`${url}/books/hobbit`, 'PATCH', { title: 'x' }), 404);
});

test('DELETE /books/:key answers 204 with no body and removes the book', async () => {
    const { books, url } = await startWithBooks();
    const response = await fetch(`${url}/books/dune`, { method: 'DELETE' });

    assert.equal(response.status, 204);
    assert.equal(await response.text(), '');
    assert.deepEqual(
        books.map((book) => book.key),
        ['emma'],
    );

    await assertJsonError(await fetch(`${url}/books/hobbit`, { method: 'DELETE' }), 404);
    assert.equal(books.length, 1);
});

test('the old verb paths answer 404', async () => {
    const { books, url } = await startWithBooks();

    assert.equal((await fetch(`${url}/getBook?key=dune`)).status, 404);
    assert.equal((await sendJson(`${url}/updateBook`, 'POST', { key: 'dune', title: 'x' })).status, 404);
    assert.equal((await sendJson(`${url}/removeBook`, 'POST', { key: 'dune' })).status, 404);
    assert.equal(books.length, 2);
    assert.equal(books[0].title, 'Dune');
});
