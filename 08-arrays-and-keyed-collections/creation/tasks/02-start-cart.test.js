import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { startCart } = await import(
    process.env.SOLUTIONS ? '../solutions/02-start-cart.js' : './02-start-cart.js'
);

test('a whole number price is the only element of the cart', () => {
    assert.deepEqual(startCart(5), [5]);
});

test('a price with cents is the only element of the cart', () => {
    assert.deepEqual(startCart(9.99), [9.99]);
});

test('the cart has exactly one element', () => {
    assert.equal(startCart(20).length, 1);
});
