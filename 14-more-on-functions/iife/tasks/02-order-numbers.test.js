import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { orderNumbers } = await import(
    process.env.SOLUTIONS ? '../solutions/02-order-numbers.js' : './02-order-numbers.js'
);

test('the IIFE gives us an object', () => {
    assert.equal(typeof orderNumbers, 'object');
    assert.notEqual(orderNumbers, null);
});

test('next() counts the orders up from ORD-1', () => {
    orderNumbers.reset();
    assert.equal(orderNumbers.next(), 'ORD-1');
    assert.equal(orderNumbers.next(), 'ORD-2');
    assert.equal(orderNumbers.next(), 'ORD-3');
});

test('reset() starts again from ORD-1', () => {
    orderNumbers.next();
    orderNumbers.reset();
    assert.equal(orderNumbers.next(), 'ORD-1');
});

test('the count stays private', () => {
    assert.deepEqual(Object.keys(orderNumbers).sort(), ['next', 'reset']);
    assert.equal(orderNumbers.count, undefined);
});
