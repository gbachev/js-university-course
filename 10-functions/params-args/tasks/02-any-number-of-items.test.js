import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { orderTotal } = await import(
    process.env.SOLUTIONS
        ? '../solutions/02-any-number-of-items.js'
        : './02-any-number-of-items.js'
);

test('the shipping and the prices are added up', () => {
    assert.equal(orderTotal(4.99, 10, 20), 34.99);
});

test('one item works', () => {
    assert.equal(orderTotal(0, 19.99), 19.99);
});

test('many items work', () => {
    assert.equal(orderTotal(3, 1, 2, 3, 4, 5, 6), 24);
});

test('the total is rounded to cents', () => {
    assert.equal(orderTotal(0, 0.1, 0.2), 0.3);
});

test('an order with no items costs only its shipping', () => {
    assert.equal(orderTotal(5), 5);
});
