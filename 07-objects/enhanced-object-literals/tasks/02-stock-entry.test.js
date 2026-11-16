import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { createStockEntry } = await import(
    process.env.SOLUTIONS ? '../solutions/02-stock-entry.js' : './02-stock-entry.js'
);

test('the key is sku- followed by the product id', () => {
    assert.deepEqual(createStockEntry(42, 5), { 'sku-42': 5 });
});

test('works for another product', () => {
    assert.deepEqual(createStockEntry(7, 12), { 'sku-7': 12 });
});

test('a quantity of 0 is kept', () => {
    assert.deepEqual(createStockEntry(7, 0), { 'sku-7': 0 });
});

test('the entry has only one property', () => {
    assert.equal(Object.keys(createStockEntry(42, 5)).length, 1);
});
