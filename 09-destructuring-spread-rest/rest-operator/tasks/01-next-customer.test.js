import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { serveNext } = await import(
    process.env.SOLUTIONS ? '../solutions/01-next-customer.js' : './01-next-customer.js'
);

test('the first customer is served and the others keep waiting', () => {
    assert.deepEqual(serveNext(['Ana', 'Ben', 'Chris']), {
        current: 'Ana',
        waiting: ['Ben', 'Chris'],
    });
});

test('with one customer nobody is left waiting', () => {
    assert.deepEqual(serveNext(['Ana']), { current: 'Ana', waiting: [] });
});

test('an empty queue has nobody to serve', () => {
    assert.deepEqual(serveNext([]), { current: undefined, waiting: [] });
});

test('the queue itself does not change', () => {
    const queue = ['Ana', 'Ben', 'Chris'];
    serveNext(queue);

    assert.deepEqual(queue, ['Ana', 'Ben', 'Chris']);
});
