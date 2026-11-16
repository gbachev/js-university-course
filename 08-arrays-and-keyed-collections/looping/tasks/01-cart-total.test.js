import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { getCartTotal } = await import(
    process.env.SOLUTIONS ? '../solutions/01-cart-total.js' : './01-cart-total.js'
);

test('the total is the sum of all prices', () => {
    assert.equal(getCartTotal([4, 10, 6]), 20);
});

test('a cart with one price costs that price', () => {
    assert.equal(getCartTotal([15]), 15);
});

test('an empty cart costs 0', () => {
    assert.equal(getCartTotal([]), 0);
});

test('free products add nothing to the total', () => {
    assert.equal(getCartTotal([0, 5, 0]), 5);
});
