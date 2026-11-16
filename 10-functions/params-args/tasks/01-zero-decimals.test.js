import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { formatPrice } = await import(
    process.env.SOLUTIONS ? '../solutions/01-zero-decimals.js' : './01-zero-decimals.js'
);

test('with only the amount we get EUR and 2 decimals', () => {
    assert.equal(formatPrice(12.5), '12.50 EUR');
});

test('a currency we pass is used', () => {
    assert.equal(formatPrice(9.99, 'USD'), '9.99 USD');
});

test('0 decimals stay 0', () => {
    assert.equal(formatPrice(1500, 'JPY', 0), '1500 JPY');
});

test('other decimals we pass are used', () => {
    assert.equal(formatPrice(2.5, 'BHD', 3), '2.500 BHD');
});

test('undefined gets the default, like a missing argument', () => {
    assert.equal(formatPrice(7, undefined, 1), '7.0 EUR');
});
