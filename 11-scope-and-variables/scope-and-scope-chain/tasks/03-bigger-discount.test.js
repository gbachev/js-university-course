import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { discountedPrices } = await import(
    process.env.SOLUTIONS
        ? '../solutions/03-bigger-discount.js'
        : './03-bigger-discount.js'
);

test('prices up to 100 get the discount we pass', () => {
    assert.deepEqual(discountedPrices([50, 100], 0.1), [45, 90]);
});

test('prices above 100 get 20% off', () => {
    assert.deepEqual(discountedPrices([200, 150], 0.1), [160, 120]);
});

test('cheap and expensive prices mixed', () => {
    assert.deepEqual(discountedPrices([50, 200, 10], 0.5), [25, 160, 5]);
});

test('the prices array is not changed', () => {
    const prices = [50, 200];
    discountedPrices(prices, 0.1);
    assert.deepEqual(prices, [50, 200]);
});
