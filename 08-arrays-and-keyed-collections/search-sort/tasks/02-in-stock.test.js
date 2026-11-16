import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { isInStock } = await import(
    process.env.SOLUTIONS ? '../solutions/02-in-stock.js' : './02-in-stock.js'
);

const stock = ['lamp', 'desk', 'chair'];

test('a product in the middle of the list is in stock', () => {
    assert.equal(isInStock(stock, 'desk'), true);
});

test('the first product of the list is in stock', () => {
    assert.equal(isInStock(stock, 'lamp'), true);
});

test('a product that is not in the list is not in stock', () => {
    assert.equal(isInStock(stock, 'sofa'), false);
});

test('nothing is in stock in an empty list', () => {
    assert.equal(isInStock([], 'lamp'), false);
});
