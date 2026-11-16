import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { orderTotal } = await import(
    process.env.SOLUTIONS ? '../solutions/01-order-total.js' : './01-order-total.js'
);

test('shipping from the form is added as a number', () => {
    assert.equal(orderTotal(40, '5'), 45);
});

test('shipping that is already a number still works', () => {
    assert.equal(orderTotal(40, 5), 45);
});

test('free shipping written as text adds nothing', () => {
    assert.equal(orderTotal(25, '0'), 25);
});
