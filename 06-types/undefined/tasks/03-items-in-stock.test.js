import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { getStock } = await import(
    process.env.SOLUTIONS ? '../solutions/03-items-in-stock.js' : './03-items-in-stock.js'
);

const stock = { apples: 12, pears: 0, plums: 3 };

test('a product in stock gives its number of items', () => {
    assert.equal(getStock(stock, 'apples'), 12);
    assert.equal(getStock(stock, 'plums'), 3);
});

test('a product with 0 items gives 0', () => {
    assert.equal(getStock(stock, 'pears'), 0);
});

test('a product that is not in the stock gives 0, not undefined', () => {
    assert.equal(getStock(stock, 'bananas'), 0);
});

test('an empty stock gives 0 for any product', () => {
    assert.equal(getStock({}, 'apples'), 0);
});
