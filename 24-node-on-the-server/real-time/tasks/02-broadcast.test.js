import { test, after } from 'node:test';
import assert from 'node:assert/strict';
import { start } from '../../lib/start.js';
import { openStream } from '../../lib/event-stream.js';

// Our code from this folder, or the solution with npm run test:solutions.
const { createApp } = await import(
    process.env.SOLUTIONS ? '../solutions/02-broadcast.js' : './02-broadcast.js'
);

const server = await start(createApp());
const first = await openStream(`${server.url}/events`);
const second = await openStream(`${server.url}/events`);
after(() => {
    first.close();
    second.close();
    return server.close();
});

function addBook(book) {
    return fetch(`${server.url}/books`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(book),
    });
}

test('both clients get the first message of GET /events', async () => {
    assert.equal(await first.next(), 'data: 2 books\n\n');
    assert.equal(await second.next(), 'data: 2 books\n\n');
});

test('after a POST, every open client gets book-added with the id 3', async () => {
    const added = await addBook({ title: 'Ubik', author: 'Philip K. Dick', year: 1969 });
    assert.equal(added.status, 201);
    assert.deepEqual(await added.json(), { title: 'Ubik', author: 'Philip K. Dick' });

    const expected = 'event: book-added\nid: 3\ndata: {"title":"Ubik","author":"Philip K. Dick"}\n\n';
    assert.equal(await first.next(), expected, 'the first client');
    assert.equal(await second.next(), expected, 'the second client');
});

test('a POST without an author answers 400 and sends nothing', async () => {
    const refused = await addBook({ title: 'Kindred' });
    assert.equal(refused.status, 400);
    assert.deepEqual(await refused.json(), { error: 'A book needs a title and an author' });

    assert.equal(await first.next(300), undefined);
});

test('the next POST gets the id 4, also for a client that joined later', async () => {
    const third = await openStream(`${server.url}/events`);
    try {
        assert.equal(await third.next(), 'data: 3 books\n\n');

        const added = await addBook({ title: 'Kindred', author: 'Octavia E. Butler' });
        assert.equal(added.status, 201);
        await added.text();

        const expected = 'event: book-added\nid: 4\ndata: {"title":"Kindred","author":"Octavia E. Butler"}\n\n';
        assert.equal(await first.next(), expected, 'the first client');
        assert.equal(await second.next(), expected, 'the second client');
        assert.equal(await third.next(), expected, 'the client that joined later');
    } finally {
        third.close();
    }
});
