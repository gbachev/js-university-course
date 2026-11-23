import { test, after } from 'node:test';
import assert from 'node:assert/strict';
import { start } from '../../lib/start.js';
import { openStream } from '../../lib/event-stream.js';

// Our code from this folder, or the solution with npm run test:solutions.
const { createApp } = await import(
    process.env.SOLUTIONS ? '../solutions/01-event-stream.js' : './01-event-stream.js'
);

const server = await start(createApp());
after(() => server.close());

test('GET /events answers 200 with the headers of an event stream', async () => {
    const stream = await openStream(`${server.url}/events`);
    try {
        assert.equal(stream.response.status, 200);
        assert.equal(stream.response.headers.get('content-type'), 'text/event-stream; charset=utf-8');
        assert.equal(stream.response.headers.get('cache-control'), 'no-cache');
        assert.equal(stream.response.headers.get('content-length'), null);
    } finally {
        stream.close();
    }
});

test('the first message is "data: 2 books" and a blank line', async () => {
    const stream = await openStream(`${server.url}/events`);
    try {
        assert.equal(stream.response.status, 200);
        assert.equal(await stream.next(), 'data: 2 books\n\n');
    } finally {
        stream.close();
    }
});

test('the stream stays open after the first message', async () => {
    const stream = await openStream(`${server.url}/events`);
    try {
        assert.equal(stream.response.status, 200);
        await stream.next();
        const after300 = await stream.next(300);
        assert.notEqual(after300, null, 'the stream ended: use res.write(), not res.send()');
        assert.equal(after300, undefined, `a second message arrived: ${after300}`);
    } finally {
        stream.close();
    }
});

test('a client that connects after a POST gets "data: 3 books"', async () => {
    const added = await fetch(`${server.url}/books`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: 'Ubik', author: 'Philip K. Dick' }),
    });
    assert.equal(added.status, 201);
    await added.text();

    const stream = await openStream(`${server.url}/events`);
    try {
        assert.equal(stream.response.status, 200);
        assert.equal(await stream.next(), 'data: 3 books\n\n');
    } finally {
        stream.close();
    }
});
