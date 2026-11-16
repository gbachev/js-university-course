import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { mapPrices } = await import(
    process.env.SOLUTIONS ? '../solutions/01-map-prices.js' : './01-map-prices.js'
);

test('returns what the callback gives for every price, in order', () => {
    assert.deepEqual(mapPrices([10, 20, 5], (price) => price * 2), [20, 40, 10]);
});

test('passes the index as the second argument', () => {
    const labels = mapPrices([10, 20], (price, index) => index + ': ' + price);
    assert.deepEqual(labels, ['0: 10', '1: 20']);
});

test('an empty array gives an empty array and no calls', () => {
    let calls = 0;
    const result = mapPrices([], () => {
        calls++;
    });
    assert.deepEqual(result, []);
    assert.equal(calls, 0);
});

test('calls the callback once per price', () => {
    let calls = 0;
    mapPrices([1, 2, 3], () => calls++);
    assert.equal(calls, 3);
});

test('the prices array is not changed', () => {
    const prices = [10, 20];
    const result = mapPrices(prices, (price) => price + 1);
    assert.deepEqual(prices, [10, 20]);
    assert.notEqual(result, prices);
});
