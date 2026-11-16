import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { getCartTotal } = await import(
    process.env.SOLUTIONS ? '../solutions/01-cart-total.js' : './01-cart-total.js'
);

test('the total is the sum of all prices', () => {
    assert.equal(getCartTotal([20, 15, 5]), 40);
});

test('a cart with one product costs that product', () => {
    assert.equal(getCartTotal([99]), 99);
});

test('an empty cart costs 0', () => {
    assert.equal(getCartTotal([]), 0);
});

test('a free product does not change the total', () => {
    assert.equal(getCartTotal([10, 0, 30]), 40);
});
