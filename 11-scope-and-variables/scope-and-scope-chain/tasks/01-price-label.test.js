import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { priceLabel } = await import(
    process.env.SOLUTIONS ? '../solutions/01-price-label.js' : './01-price-label.js'
);

test('without a currency the label uses €', () => {
    assert.equal(priceLabel(5), '€5.00');
});

test('the currency we pass is used', () => {
    assert.equal(priceLabel(12.5, '$'), '$12.50');
});

test('the amount always has two decimal places', () => {
    assert.equal(priceLabel(0), '€0.00');
    assert.equal(priceLabel(9.999, '£'), '£10.00');
});
