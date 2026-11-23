import { test, after } from 'node:test';
import assert from 'node:assert/strict';
import { start } from '../../lib/start.js';

// Our code from this folder, or the solution with npm run test:solutions.
const { createApp } = await import(
    process.env.SOLUTIONS ? '../solutions/01-one-book-and-filters.js' : './01-one-book-and-filters.js'
);

const books = [
    { key: 'dune', title: 'Dune', author: 'Frank Herbert' },
    { key: 'emma', title: 'Emma', author: 'Jane Austen' },
    { key: 'persuasion', title: 'Persuasion', author: 'Jane Austen' },
];

const server = await start(createApp(books));
after(() => server.close());

async function getJson(path) {
    const response = await fetch(`${server.url}${path}`);
    assert.match(response.headers.get('content-type') ?? '', /^application\/json/);
    return { status: response.status, body: await response.json() };
}

test('GET /books/:key answers 200 with the book', async () => {
    assert.deepEqual(await getJson('/books/emma'), { status: 200, body: books[1] });
    assert.deepEqual(await getJson('/books/dune'), { status: 200, body: books[0] });
});

test('GET /books/:key answers 404 with an error when no book has the key', async () => {
    const { status, body } = await getJson('/books/hobbit');

    assert.equal(status, 404);
    assert.equal(typeof body.error, 'string');
});

test('GET /books with no query answers with every book', async () => {
    assert.deepEqual(await getJson('/books'), { status: 200, body: books });
});

test('?author= keeps the books by exactly that author', async () => {
    assert.deepEqual(await getJson('/books?author=Jane%20Austen'), {
        status: 200,
        body: [books[1], books[2]],
    });
    assert.deepEqual(await getJson('/books?author=Jane'), { status: 200, body: [] });
});

test('?limit= keeps the first books', async () => {
    assert.deepEqual(await getJson('/books?limit=2'), { status: 200, body: [books[0], books[1]] });
    assert.deepEqual(await getJson('/books?limit=10'), { status: 200, body: books });
});

test('author and limit together filter first, then take the first ones', async () => {
    assert.deepEqual(await getJson('/books?author=Jane%20Austen&limit=1'), {
        status: 200,
        body: [books[1]],
    });
});

test('a limit that is not a whole number from 1 answers 400 with an error', async () => {
    for (const limit of ['abc', '0', '1.5', '-2', '']) {
        const { status, body } = await getJson(`/books?limit=${limit}`);

        assert.equal(status, 400, `limit=${limit}`);
        assert.equal(typeof body.error, 'string');
    }
});

test('an author given twice answers 400 with an error', async () => {
    const { status, body } = await getJson('/books?author=Jane%20Austen&author=Frank%20Herbert');

    assert.equal(status, 400);
    assert.equal(typeof body.error, 'string');
});
