import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { countPairs } = await import(
    process.env.SOLUTIONS ? '../solutions/02-count-pairs.js' : './02-count-pairs.js'
);

test('counts every pair that spends the budget exactly', () => {
    assert.equal(countPairs([12, 25, 8, 30, 20, 38], 50), 2);
});

test('no matching pair gives 0', () => {
    assert.equal(countPairs([12, 25, 8, 30, 20], 100), 0);
});

test('an item never pairs with itself', () => {
    assert.equal(countPairs([25], 50), 0);
    assert.equal(countPairs([25, 10], 50), 0);
});

test('equal prices make a pair for each two items', () => {
    assert.equal(countPairs([25, 25], 50), 1);
    assert.equal(countPairs([25, 25, 25], 50), 3);
});

test('the same price can be part of several pairs', () => {
    assert.equal(countPairs([20, 30, 30, 20], 50), 4);
});

test('an empty cart gives 0', () => {
    assert.equal(countPairs([], 50), 0);
});

test('a cart of 80,000 prices takes less than 250 ms', () => {
    const prices = Array.from({ length: 80000 }, (_, i) => i + 1);
    const start = performance.now();
    const pairs = countPairs(prices, 100);
    const ms = performance.now() - start;
    assert.equal(pairs, 49);
    assert.ok(ms < 250, `took ${Math.round(ms)} ms`);
});
