import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { getPageSize } = await import(
    process.env.SOLUTIONS ? '../solutions/02-page-size.js' : './02-page-size.js'
);

test('the page size from the URL comes first', () => {
    assert.equal(getPageSize(50, 10), 50);
});

test('without a page size in the URL we use the saved one', () => {
    assert.equal(getPageSize(undefined, 10), 10);
});

test('without either of them we show 20 products', () => {
    assert.equal(getPageSize(undefined, undefined), 20);
    assert.equal(getPageSize(null, null), 20);
});

test('a page size of 0 in the URL is kept', () => {
    assert.equal(getPageSize(0, 10), 0);
});

test('a saved page size of 0 is kept when the URL has none', () => {
    assert.equal(getPageSize(null, 0), 0);
});
