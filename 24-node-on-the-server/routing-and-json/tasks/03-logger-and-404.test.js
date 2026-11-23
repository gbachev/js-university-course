import { test, after } from 'node:test';
import assert from 'node:assert/strict';
import { start } from '../../lib/start.js';

// Our code from this folder, or the solution with npm run test:solutions.
const { createApp } = await import(
    process.env.SOLUTIONS ? '../solutions/03-logger-and-404.js' : './03-logger-and-404.js'
);

const servers = [];
after(() => Promise.all(servers.map((server) => server.close())));

// Every test gets its own app, books and log.
async function startApp() {
    const books = [{ key: 'dune', title: 'Dune', author: 'Frank Herbert' }];
    const log = [];
    const server = await start(createApp(books, log));
    servers.push(server);
    return { books, log, url: server.url };
}

function postJson(url, body) {
    return fetch(`${url}/books`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body,
    });
}

test('the routes still work', async () => {
    const { books, url } = await startApp();

    const list = await fetch(`${url}/books`);
    assert.equal(list.status, 200);
    assert.deepEqual(await list.json(), books);

    const created = await postJson(url, '{"key":"ubik","title":"Ubik","author":"Philip K. Dick"}');
    assert.equal(created.status, 201);
    assert.equal(books.length, 2);
});

test('the logger adds "METHOD url" for each request, in order, with the query string', async () => {
    const { log, url } = await startApp();

    await fetch(`${url}/books?limit=1`);
    await postJson(url, '{"key":"ubik","title":"Ubik","author":"Philip K. Dick"}');

    assert.deepEqual(log, ['GET /books?limit=1', 'POST /books']);
});

test('an unknown path answers 404 with a JSON error, and is logged', async () => {
    const { log, url } = await startApp();
    const response = await fetch(`${url}/authors?x=1`);

    assert.equal(response.status, 404);
    assert.match(response.headers.get('content-type') ?? '', /^application\/json/);
    assert.deepEqual(await response.json(), { error: 'No route for GET /authors' });
    assert.deepEqual(log, ['GET /authors?x=1']);
});

test('a method with no route answers the JSON 404 too', async () => {
    const { url } = await startApp();
    const response = await fetch(`${url}/books`, { method: 'DELETE' });

    assert.equal(response.status, 404);
    assert.match(response.headers.get('content-type') ?? '', /^application\/json/);
    assert.deepEqual(await response.json(), { error: 'No route for DELETE /books' });
});

test('a POST with broken JSON is logged before express.json() answers 400', async () => {
    const { log, url } = await startApp();
    const response = await postJson(url, '{"key":');

    assert.equal(response.status, 400);
    assert.deepEqual(log, ['POST /books']);
});
