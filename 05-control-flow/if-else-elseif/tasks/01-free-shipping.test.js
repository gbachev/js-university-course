import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { getShippingCost } = await import(
    process.env.SOLUTIONS ? '../solutions/01-free-shipping.js' : './01-free-shipping.js'
);

test('an order above 50 ships for free', () => {
    assert.equal(getShippingCost(80), 0);
});

test('an order below 50 pays 4.99', () => {
    assert.equal(getShippingCost(20), 4.99);
});

test('an order of exactly 50 ships for free', () => {
    assert.equal(getShippingCost(50), 0);
});

test('an order just below 50 pays 4.99', () => {
    assert.equal(getShippingCost(49.99), 4.99);
});
