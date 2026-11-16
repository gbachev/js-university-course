import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { getPriceRange } = await import(
    process.env.SOLUTIONS ? '../solutions/03-price-range.js' : './03-price-range.js'
);

test('prices typed in the right order stay as they are', () => {
    assert.deepEqual(getPriceRange(10, 50), [10, 50]);
});

test('prices typed in the wrong order are swapped', () => {
    assert.deepEqual(getPriceRange(50, 10), [10, 50]);
});

test('the same price twice stays the same', () => {
    assert.deepEqual(getPriceRange(25, 25), [25, 25]);
});

test('prices with cents are swapped too', () => {
    assert.deepEqual(getPriceRange(99.99, 0.5), [0.5, 99.99]);
});
