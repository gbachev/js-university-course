import { test, after } from 'node:test';
import assert from 'node:assert/strict';
import { start } from '../../lib/start.js';

// Our code from this folder, or the solution with npm run test:solutions.
const { createApp } = await import(
    process.env.SOLUTIONS ? '../solutions/01-create-with-status.js' : './01-create-with-status.js'
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

function postJson(url, body) {
    return fetch(`${url}/books`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
    });
}

async function assertJsonError(response, status) {
    assert.equal(response.status, status);
    assert.match(response.headers.get('content-type') ?? '', /^application\/json/);
    assert.equal(typeof (await response.json()).error, 'string');
}

test('POST /books answers 201 with the book and a Location header, and adds it', async () => {
    const { books, url } = await startWithBooks();
    const ubik = { key: 'ubik', title: 'Ubik', author: 'Philip K. Dick' };
    const response = await postJson(url, { ...ubik, year: 1969 });

    assert.equal(response.status, 201);
    assert.match(response.headers.get('content-type') ?? '', /^application\/json/);
    assert.equal(response.headers.get('location'), '/books/ubik');
    assert.deepEqual(await response.json(), ubik);
    assert.deepEqual(books.at(-1), ubik);
    assert.equal(books.length, 3);
});

test('the Location of a new book leads to it', async () => {
    const { url } = await startWithBooks();
    const ubik = { key: 'ubik', title: 'Ubik', author: 'Philip K. Dick' };
    const created = await postJson(url, ubik);
    const response = await fetch(`${url}${created.headers.get('location')}`);

    assert.equal(response.status, 200);
    assert.deepEqual(await response.json(), ubik);
});

test('POST /books answers 409 when the key is taken, and changes nothing', async () => {
    const { books, url } = await startWithBooks();
    const response = await postJson(url, { key: 'dune', title: 'Dune Messiah', author: 'Frank Herbert' });

    await assertJsonError(response, 409);
    assert.equal(books.length, 2);
    assert.equal(books[0].title, 'Dune');
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
        await assertJsonError(await postJson(url, body), 400);
    }
    assert.equal(books.length, 2);
});

test('POST /books checks the fields before the key: a taken key with no title gets 400', async () => {
    const { url } = await startWithBooks();

    await assertJsonError(await postJson(url, { key: 'dune' }), 400);
});

test('POST /books without a JSON body answers 400, not 500', async () => {
    const { books, url } = await startWithBooks();
    const response = await fetch(`${url}/books`, {
        method: 'POST',
        body: new URLSearchParams({ key: 'ubik', title: 'Ubik', author: 'Philip K. Dick' }),
    });

    await assertJsonError(response, 400);
    assert.equal(books.length, 2);
});

test('GET /books/:key answers 200 with the book, or 404 with an error', async () => {
    const { books, url } = await startWithBooks();

    const found = await fetch(`${url}/books/emma`);
    assert.equal(found.status, 200);
    assert.deepEqual(await found.json(), books[1]);

    await assertJsonError(await fetch(`${url}/books/hobbit`), 404);
});
