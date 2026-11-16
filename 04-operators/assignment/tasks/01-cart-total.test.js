import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { addToCart } = await import(
    process.env.SOLUTIONS ? '../solutions/01-cart-total.js' : './01-cart-total.js'
);

test('the first product goes into an empty cart', () => {
    assert.equal(addToCart(0, 12, 2), 24);
});

test('a product is added to what is already in the cart', () => {
    assert.equal(addToCart(24, 5, 3), 39);
});

test('adding zero items leaves the total as it is', () => {
    assert.equal(addToCart(39, 10, 0), 39);
});
