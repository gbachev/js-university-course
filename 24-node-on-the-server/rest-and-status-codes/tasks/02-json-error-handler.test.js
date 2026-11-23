import { test, after } from 'node:test';
import assert from 'node:assert/strict';
import { start } from '../../lib/start.js';

// Our code from this folder, or the solution with npm run test:solutions.
const { createApp } = await import(
    process.env.SOLUTIONS ? '../solutions/02-json-error-handler.js' : './02-json-error-handler.js'
);

const servers = [];
after(() => Promise.all(servers.map((server) => server.close())));

// Every test gets its own app, books and errors array.
async function startApp() {
    const books = [{ key: 'dune', title: 'Dune', author: 'Frank Herbert' }];
    const errors = [];
    const server = await start(createApp(books, errors));
    servers.push(server);
    return { books, errors, url: server.url };
}

function postJson(url, body) {
    return fetch(`${url}/books`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body,
    });
}

async function assertJsonError(response, status) {
    assert.equal(response.status, status);
    assert.match(response.headers.get('content-type') ?? '', /^application\/json/);
    const text = await response.text();
    assert.equal(typeof JSON.parse(text).error, 'string');
    return text;
}

test('broken JSON answers 400 with a JSON error, and is not added to errors', async () => {
    const { books, errors, url } = await startApp();

    await assertJsonError(await postJson(url, '{"key":'), 400);
    assert.equal(errors.length, 0);
    assert.equal(books.length, 1);
});

test('a body over 1 KB answers 413 with a JSON error, and is not added to errors', async () => {
    const { errors, url } = await startApp();
    const body = JSON.stringify({ key: 'ubik', title: 'x'.repeat(2048), author: 'Philip K. Dick' });

    await assertJsonError(await postJson(url, body), 413);
    assert.equal(errors.length, 0);
});

test('a bug answers 500 with a JSON error and adds the error to errors', async () => {
    const { errors, url } = await startApp();

    await assertJsonError(await fetch(`${url}/books/stats`), 500);
    assert.equal(errors.length, 1);
    assert.equal(errors[0].message, 'Connection to prices.internal:5432 refused');
});

test('the 500 shows neither the message nor the stack trace', async () => {
    const { url } = await startApp();
    const text = await assertJsonError(await fetch(`${url}/books/stats`), 500);

    assert.ok(!text.includes('prices.internal'), text);
    assert.ok(!text.includes('    at '), text);
    assert.ok(!/\.js:\d+/.test(text), text);
});

test('the routes and the JSON 404 still work', async () => {
    const { books, url } = await startApp();

    const list = await fetch(`${url}/books`);
    assert.equal(list.status, 200);
    assert.deepEqual(await list.json(), books);

    const created = await postJson(url, '{"key":"ubik","title":"Ubik","author":"Philip K. Dick"}');
    assert.equal(created.status, 201);
    assert.equal(books.length, 2);

    const missing = await fetch(`${url}/authors`);
    assert.equal(missing.status, 404);
    assert.deepEqual(await missing.json(), { error: 'No route for GET /authors' });
});
