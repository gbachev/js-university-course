import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { cheapestPrices } = await import(
    process.env.SOLUTIONS ? '../solutions/01-cheapest-prices.js' : './01-cheapest-prices.js'
);

test('the two cheapest of four prices, cheapest first', () => {
    assert.deepEqual(cheapestPrices([9, 120, 15, 4.5], 2), [4.5, 9]);
});

test('the single cheapest price', () => {
    assert.deepEqual(cheapestPrices([30, 7, 100], 1), [7]);
});

test('prices with more digits are not sorted before smaller ones', () => {
    assert.deepEqual(cheapestPrices([1000, 25, 300, 4], 3), [4, 25, 300]);
});

test('the array we pass in is not changed', () => {
    const prices = [9, 120, 15, 4.5];
    cheapestPrices(prices, 2);
    assert.deepEqual(prices, [9, 120, 15, 4.5]);
});
