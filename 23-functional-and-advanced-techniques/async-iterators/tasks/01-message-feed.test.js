import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { messageFeed } = await import(
    process.env.SOLUTIONS ? '../solutions/01-message-feed.js' : './01-message-feed.js'
);

const messages = ['Order placed', 'Order shipped', 'Order delivered'];
const loadMessage = (index) => Promise.resolve(messages[index]);

test('for await...of reads the messages in order', async () => {
    const read = [];
    for await (const message of messageFeed(loadMessage, 3)) {
        read.push(message);
    }
    assert.deepEqual(read, messages);
});

test('next() returns a promise of { value, done }', async () => {
    const iterator = messageFeed(loadMessage, 1)[Symbol.asyncIterator]();
    const first = iterator.next();
    assert.ok(first instanceof Promise);
    assert.deepEqual(await first, { value: 'Order placed', done: false });
    assert.deepEqual(await iterator.next(), { value: undefined, done: true });
});

test('stops after count messages', async () => {
    assert.deepEqual(await Array.fromAsync(messageFeed(loadMessage, 2)), [
        'Order placed',
        'Order shipped',
    ]);
});

test('waits for each message before it hands it out', async () => {
    const slowLoad = (index) => new Promise((resolve) => {
        queueMicrotask(() => resolve(`Message ${index}`));
    });
    assert.deepEqual(await Array.fromAsync(messageFeed(slowLoad, 2)), [
        'Message 0',
        'Message 1',
    ]);
});

test('every loop starts again from the first message', async () => {
    const feed = messageFeed(loadMessage, 2);
    assert.deepEqual(await Array.fromAsync(feed), ['Order placed', 'Order shipped']);
    assert.deepEqual(await Array.fromAsync(feed), ['Order placed', 'Order shipped']);
});

test('a count of 0 gives no messages', async () => {
    assert.deepEqual(await Array.fromAsync(messageFeed(loadMessage, 0)), []);
});
