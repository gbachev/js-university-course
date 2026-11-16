import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { inStockNames } = await import(
    process.env.SOLUTIONS ? '../solutions/01-in-stock-names.js' : './01-in-stock-names.js'
);

test('only the products with stock are listed', () => {
    const products = [
        { name: 'Lamp', stock: 3 },
        { name: 'Desk', stock: 0 },
        { name: 'Chair', stock: 12 },
    ];
    assert.deepEqual(inStockNames(products), ['Lamp', 'Chair']);
});

test('a stock of 1 is enough', () => {
    assert.deepEqual(inStockNames([{ name: 'Pen', stock: 1 }]), ['Pen']);
});

test('no products in stock give an empty array', () => {
    assert.deepEqual(inStockNames([{ name: 'Desk', stock: 0 }]), []);
});

test('an empty array gives an empty array', () => {
    assert.deepEqual(inStockNames([]), []);
});
