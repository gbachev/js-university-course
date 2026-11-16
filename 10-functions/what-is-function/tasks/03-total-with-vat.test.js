import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { totalWithVat } = await import(
    process.env.SOLUTIONS ? '../solutions/03-total-with-vat.js' : './03-total-with-vat.js'
);

test('the prices are added up and get VAT', () => {
    assert.equal(totalWithVat([10, 20]), 36);
});

test('a cart with one item has the price of that item with VAT', () => {
    assert.equal(totalWithVat([19.99]), 23.99);
});

test('the total is rounded to cents', () => {
    assert.equal(totalWithVat([0.1, 0.2]), 0.36);
});

test('an empty cart has a total of 0', () => {
    assert.equal(totalWithVat([]), 0);
});
