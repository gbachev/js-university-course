import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { cartTotal } = await import(
    process.env.SOLUTIONS ? '../solutions/01-running-total.js' : './01-running-total.js'
);

test('the prices of a cart add up to the total', () => {
    assert.equal(cartTotal([10, 5, 2.5]), 17.5);
});

test('a cart with one price has that price as its total', () => {
    assert.equal(cartTotal([42]), 42);
});

test('an empty cart has a total of 0', () => {
    assert.equal(cartTotal([]), 0);
});
