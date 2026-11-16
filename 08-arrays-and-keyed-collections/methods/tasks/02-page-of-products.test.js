import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { getPage } = await import(
    process.env.SOLUTIONS ? '../solutions/02-page-of-products.js' : './02-page-of-products.js'
);

const products = ['lamp', 'desk', 'chair', 'shelf', 'rug'];

test('the first page holds the first products', () => {
    assert.deepEqual(getPage(products, 1, 2), ['lamp', 'desk']);
});

test('the second page holds the next products', () => {
    assert.deepEqual(getPage(products, 2, 2), ['chair', 'shelf']);
});

test('the last page can be shorter', () => {
    assert.deepEqual(getPage(products, 3, 2), ['rug']);
});

test('a page past the end is empty', () => {
    assert.deepEqual(getPage(products, 4, 2), []);
});

test('the products array does not change', () => {
    getPage(products, 1, 2);
    assert.deepEqual(products, ['lamp', 'desk', 'chair', 'shelf', 'rug']);
});
