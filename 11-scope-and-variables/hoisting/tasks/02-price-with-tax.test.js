import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { priceWithTax } = await import(
    process.env.SOLUTIONS ? '../solutions/02-price-with-tax.js' : './02-price-with-tax.js'
);

test('a price in BG gets 20% tax', () => {
    assert.equal(priceWithTax(100, 'BG'), 120);
});

test('any country other than US gets 20% tax', () => {
    assert.equal(priceWithTax(50, 'DE'), 60);
});

test('a price in the US gets no tax', () => {
    assert.equal(priceWithTax(100, 'US'), 100);
});

test('a price of 0 stays 0', () => {
    assert.equal(priceWithTax(0, 'BG'), 0);
});
