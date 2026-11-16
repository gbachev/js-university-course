import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { orderTotal } = await import(
    process.env.SOLUTIONS ? '../solutions/02-order-total.js' : './02-order-total.js'
);

test('a small order pays for shipping', () => {
    assert.equal(orderTotal(10, 2), 24.99);
});

test('an order of 50 or more ships for free', () => {
    assert.equal(orderTotal(25, 2), 50);
    assert.equal(orderTotal(30, 3), 90);
});

test('the total is rounded to cents', () => {
    assert.equal(orderTotal(0.1, 3), 5.29);
});

test('a quantity of 0 pays only for shipping', () => {
    assert.equal(orderTotal(19.99, 0), 4.99);
});
