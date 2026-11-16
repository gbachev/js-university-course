import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { shippingCost } = await import(
    process.env.SOLUTIONS
        ? '../solutions/02-before-initialization.js'
        : './02-before-initialization.js'
);

test('an order above the limit ships for free', () => {
    assert.equal(shippingCost(60), 0);
});

test('an order of exactly 50 ships for free', () => {
    assert.equal(shippingCost(50), 0);
});

test('a smaller order pays the standard cost', () => {
    assert.equal(shippingCost(20), 4.99);
    assert.equal(shippingCost(49.99), 4.99);
});
