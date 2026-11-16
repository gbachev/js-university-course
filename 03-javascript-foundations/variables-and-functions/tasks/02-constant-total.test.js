import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { checkoutTotal } = await import(
    process.env.SOLUTIONS ? '../solutions/02-constant-total.js' : './02-constant-total.js'
);

test('does not throw a TypeError', () => {
    assert.doesNotThrow(() => checkoutTotal(10, 2, 5));
});

test('adds the shipping to the price times the quantity', () => {
    assert.equal(checkoutTotal(10, 2, 5), 25);
});

test('free shipping adds nothing', () => {
    assert.equal(checkoutTotal(15, 3, 0), 45);
});

test('works for a single book', () => {
    assert.equal(checkoutTotal(20, 1, 4), 24);
});
