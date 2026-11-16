import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { hasFreeShipping } = await import(
    process.env.SOLUTIONS ? '../solutions/02-free-shipping.js' : './02-free-shipping.js'
);

test('an order above the threshold ships for free', () => {
    assert.equal(hasFreeShipping(80, 50), true);
});

test('an order of exactly the threshold ships for free', () => {
    assert.equal(hasFreeShipping(50, 50), true);
});

test('an order below the threshold does not ship for free', () => {
    assert.equal(hasFreeShipping(49, 50), false);
});

test('a few cents below the threshold is still below it', () => {
    assert.equal(hasFreeShipping(49.99, 50), false);
});
