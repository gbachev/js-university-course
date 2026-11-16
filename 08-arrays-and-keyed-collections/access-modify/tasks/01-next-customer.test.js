import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { serveNextCustomer } = await import(
    process.env.SOLUTIONS ? '../solutions/01-next-customer.js' : './01-next-customer.js'
);

test('the first customer in the queue is served', () => {
    assert.equal(serveNextCustomer(['Anna', 'Ben', 'Carl']), 'Anna');
});

test('the served customer leaves the queue', () => {
    const queue = ['Anna', 'Ben', 'Carl'];
    serveNextCustomer(queue);
    assert.deepEqual(queue, ['Ben', 'Carl']);
});

test('two calls serve the first two customers in order', () => {
    const queue = ['Anna', 'Ben', 'Carl'];
    assert.equal(serveNextCustomer(queue), 'Anna');
    assert.equal(serveNextCustomer(queue), 'Ben');
    assert.deepEqual(queue, ['Carl']);
});

test('an empty queue has nobody to serve', () => {
    const queue = [];
    assert.equal(serveNextCustomer(queue), undefined);
    assert.deepEqual(queue, []);
});
