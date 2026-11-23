import { test, after } from 'node:test';
import assert from 'node:assert/strict';
import { start } from '../../lib/start.js';
import { openStream } from '../../lib/event-stream.js';

// Our code from this folder, or the solution with npm run test:solutions.
const { createApp } = await import(
    process.env.SOLUTIONS ? '../solutions/03-remove-client.js' : './03-remove-client.js'
);

const server = await start(createApp());
const leaving = await openStream(`${server.url}/events`);
const staying = await openStream(`${server.url}/events`);
after(() => {
    leaving.close();
    staying.close();
    return server.close();
});

async function countClients() {
    const response = await fetch(`${server.url}/stats`);
    return (await response.json()).clients;
}

// The server learns of a closed connection a moment later, so we ask a few times.
async function waitForClients(expected) {
    let count = await countClients();
    for (let tries = 0; tries < 20 && count !== expected; tries += 1) {
        await new Promise((resolve) => setTimeout(resolve, 25));
        count = await countClients();
    }
    return count;
}

test('two open streams count as two clients', async () => {
    assert.equal(await leaving.next(), 'data: 2 books\n\n');
    assert.equal(await staying.next(), 'data: 2 books\n\n');
    assert.equal(await countClients(), 2);
});

test('a client that closes its stream is removed', async () => {
    leaving.close();
    assert.equal(await waitForClients(1), 1);
});

test('a POST still reaches the client that stayed', async () => {
    const added = await fetch(`${server.url}/books`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: 'Ubik', author: 'Philip K. Dick' }),
    });
    assert.equal(added.status, 201);
    await added.text();

    assert.equal(
        await staying.next(),
        'event: book-added\nid: 3\ndata: {"title":"Ubik","author":"Philip K. Dick"}\n\n',
    );
    assert.equal(await countClients(), 1);
});

test('when the last client leaves, none are left', async () => {
    staying.close();
    assert.equal(await waitForClients(0), 0);
});
