import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { canCheckout } = await import(
    process.env.SOLUTIONS ? '../solutions/01-can-check-out.js' : './01-can-check-out.js'
);

test('a logged in customer with items in the cart can check out', () => {
    assert.equal(canCheckout(true, 3), true);
});

test('a logged in customer with an empty cart cannot check out', () => {
    assert.equal(canCheckout(true, 0), false);
});

test('a guest with items in the cart cannot check out', () => {
    assert.equal(canCheckout(false, 3), false);
});

test('a guest with an empty cart cannot check out', () => {
    assert.equal(canCheckout(false, 0), false);
});
