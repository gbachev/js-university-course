import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { addVat } = await import(
    process.env.SOLUTIONS ? '../solutions/01-price-with-vat.js' : './01-price-with-vat.js'
);

test('a whole price gets 20% VAT added', () => {
    assert.equal(addVat(100), 120);
});

test('the price with VAT is rounded to cents', () => {
    assert.equal(addVat(19.99), 23.99);
    assert.equal(addVat(0.1), 0.12);
});

test('a price of 0 stays 0', () => {
    assert.equal(addVat(0), 0);
});

test('the result is a number', () => {
    assert.equal(typeof addVat(50), 'number');
});
