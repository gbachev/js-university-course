import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { findFirstSoldOut } = await import(
    process.env.SOLUTIONS ? '../solutions/02-first-sold-out.js' : './02-first-sold-out.js'
);

test('returns the sold-out product', () => {
    assert.equal(findFirstSoldOut(['Mug', 'Cap', 'Bag'], [4, 0, 7]), 'Cap');
});

test('with several sold-out products, returns the first one', () => {
    assert.equal(findFirstSoldOut(['Mug', 'Cap', 'Bag'], [4, 0, 0]), 'Cap');
});

test('finds a sold-out product at the start and at the end', () => {
    assert.equal(findFirstSoldOut(['Mug', 'Cap', 'Bag'], [0, 3, 7]), 'Mug');
    assert.equal(findFirstSoldOut(['Mug', 'Cap', 'Bag'], [1, 3, 0]), 'Bag');
});

test('returns null when every product is in stock', () => {
    assert.equal(findFirstSoldOut(['Mug', 'Cap'], [4, 2]), null);
});

test('returns null for an empty warehouse', () => {
    assert.equal(findFirstSoldOut([], []), null);
});
