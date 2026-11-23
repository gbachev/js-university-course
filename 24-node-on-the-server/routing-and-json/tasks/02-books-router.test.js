import { test, after } from 'node:test';
import assert from 'node:assert/strict';
import { start } from '../../lib/start.js';

// Our code from this folder, or the solution with npm run test:solutions.
const { createApp } = await import(
    process.env.SOLUTIONS ? '../solutions/02-books-router.js' : './02-books-router.js'
);

const servers = [];
after(() => Promise.all(servers.map((server) => server.close())));

// Every test gets its own app with its own copy of the books, so the tests do not
// change each other's data.
async function startWithBooks() {
    const books = [
        { key: 'dune', title: 'Dune', author: 'Frank Herbert' },
        { key: 'emma', title: 'Emma', author: 'Jane Austen' },
    ];
    const server = await start(createApp(books));
    servers.push(server);
    return { books, url: server.url };
}

function postJson(url, body) {
    return fetch(`${url}/books`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: typeof body === 'string' ? body : JSON.stringify(body),
    });
}

test('GET /books answers 200 with the books', async () => {
    const { books, url } = await startWithBooks();
    const response = await fetch(`${url}/books`);

    assert.equal(response.status, 200);
    assert.match(response.headers.get('content-type') ?? '', /^application\/json/);
    assert.deepEqual(await response.json(), books);
});

test('POST /books answers 201 with the new book and adds it', async () => {
    const { books, url } = await startWithBooks();
    const ubik = { key: 'ubik', title: 'Ubik', author: 'Philip K. Dick' };
    const response = await postJson(url, { ...ubik, year: 1969 });

    assert.equal(response.status, 201);
    assert.match(response.headers.get('content-type') ?? '', /^application\/json/);
    assert.deepEqual(await response.json(), ubik);
    assert.deepEqual(books.at(-1), ubik);
    assert.equal(books.length, 3);

    const list = await fetch(`${url}/books`);
    assert.deepEqual((await list.json()).at(-1), ubik);
});

test('POST /books answers 400 when a field is missing or empty', async () => {
    const { books, url } = await startWithBooks();
    const bodies = [
        { title: 'Ubik', author: 'Philip K. Dick' },
        { key: 'ubik', author: 'Philip K. Dick' },
        { key: 'ubik', title: 'Ubik' },
        { key: 'ubik', title: '', author: 'Philip K. Dick' },
    ];

    for (const body of bodies) {
        const response = await postJson(url, body);

        assert.equal(response.status, 400, JSON.stringify(body));
        assert.match(response.headers.get('content-type') ?? '', /^application\/json/);
        assert.equal(typeof (await response.json()).error, 'string');
    }
    assert.equal(books.length, 2);
});

test('POST /books without a JSON body answers 400, not 500', async () => {
    const { books, url } = await startWithBooks();
    const response = await fetch(`${url}/books`, {
        method: 'POST',
        body: new URLSearchParams({ key: 'ubik', title: 'Ubik', author: 'Philip K. Dick' }),
    });

    assert.equal(response.status, 400);
    assert.match(response.headers.get('content-type') ?? '', /^application\/json/);
    assert.equal(typeof (await response.json()).error, 'string');
    assert.equal(books.length, 2);
});

test('POST /books with broken JSON answers 400', async () => {
    const { books, url } = await startWithBooks();
    const response = await postJson(url, '{"key":');

    assert.equal(response.status, 400);
    assert.equal(books.length, 2);
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
});

test('DELETE /books/:key answers 404 with an error when no book has the key', async () => {
    const { books, url } = await startWithBooks();
    const response = await fetch(`${url}/books/hobbit`, { method: 'DELETE' });

    assert.equal(response.status, 404);
    assert.match(response.headers.get('content-type') ?? '', /^application\/json/);
    assert.equal(typeof (await response.json()).error, 'string');
    assert.equal(books.length, 2);
});
