import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { correctLastPrice } = await import(
    process.env.SOLUTIONS ? '../solutions/02-last-price.js' : './02-last-price.js'
);

test('the last price is replaced', () => {
    assert.deepEqual(correctLastPrice([2.5, 4, 10], 1), [2.5, 4, 1]);
});

test('the array we pass in is changed', () => {
    const prices = [3, 7];
    correctLastPrice(prices, 5);
    assert.deepEqual(prices, [3, 5]);
});

test('the number of prices stays the same', () => {
    assert.equal(correctLastPrice([2.5, 4, 10], 1).length, 3);
});

test('a list with one price gets the new price', () => {
    assert.deepEqual(correctLastPrice([8], 6), [6]);
});

test('an empty list stays empty, with no extra properties', () => {
    assert.deepEqual(correctLastPrice([], 1), []);
});
