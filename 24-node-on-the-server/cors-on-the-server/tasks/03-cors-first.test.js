import { test, after } from 'node:test';
import assert from 'node:assert/strict';
import { start } from '../../lib/start.js';

// Our code from this folder, or the solution with npm run test:solutions.
const { createApp } = await import(
    process.env.SOLUTIONS ? '../solutions/03-cors-first.js' : './03-cors-first.js'
);

const page = 'http://localhost:8080';
const server = await start(createApp());
after(() => server.close());

test('GET /books answers 200 with Allow-Origin', async () => {
    const response = await fetch(`${server.url}/books`, { headers: { Origin: page } });

    assert.equal(response.status, 200);
    assert.equal(response.headers.get('access-control-allow-origin'), page);
});

test('POST /books with a JSON body answers 201 with the book and Allow-Origin', async () => {
    const response = await fetch(`${server.url}/books`, {
        method: 'POST',
        headers: { Origin: page, 'Content-Type': 'application/json' },
        body: JSON.stringify({ key: 'emma', title: 'Emma', author: 'Jane Austen' }),
    });

    assert.equal(response.status, 201);
    assert.equal(response.headers.get('access-control-allow-origin'), page);
    assert.deepEqual(await response.json(), { key: 'emma', title: 'Emma', author: 'Jane Austen' });
});

test('broken JSON gets the 400 of express.json() with Allow-Origin', async () => {
    const response = await fetch(`${server.url}/books`, {
        method: 'POST',
        headers: { Origin: page, 'Content-Type': 'application/json' },
        body: '{"key":"emma",',
    });

    assert.equal(response.status, 400);
    assert.equal(response.headers.get('access-control-allow-origin'), page);
});

test('a preflight gets 204 with Allow-Origin and Allow-Methods', async () => {
    const response = await fetch(`${server.url}/books`, {
        method: 'OPTIONS',
        headers: {
            Origin: page,
            'Access-Control-Request-Method': 'POST',
            'Access-Control-Request-Headers': 'content-type',
        },
    });

    assert.equal(response.status, 204);
    assert.equal(response.headers.get('access-control-allow-origin'), page);
    assert.match(response.headers.get('access-control-allow-methods') ?? '', /POST/i);
});

test('a path with no route gets the JSON 404 with Allow-Origin', async () => {
    const response = await fetch(`${server.url}/authors`, { headers: { Origin: page } });

    assert.equal(response.status, 404);
    assert.equal(response.headers.get('access-control-allow-origin'), page);
    assert.deepEqual(await response.json(), { error: 'No route for GET /authors' });
});
