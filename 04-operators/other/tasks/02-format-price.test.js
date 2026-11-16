import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { formatPrice } = await import(
    process.env.SOLUTIONS ? '../solutions/02-format-price.js' : './02-format-price.js'
);

test('a number is shown as a price in euros', () => {
    assert.equal(formatPrice(25), '25 EUR');
    assert.equal(formatPrice(9.99), '9.99 EUR');
});

test('a price of 0 is still a price', () => {
    assert.equal(formatPrice(0), '0 EUR');
});

test('a string is not a price', () => {
    assert.equal(formatPrice('call us'), 'Price on request');
});

test('a number written as a string is not a price either', () => {
    assert.equal(formatPrice('25'), 'Price on request');
});

test('no price at all means price on request', () => {
    assert.equal(formatPrice(undefined), 'Price on request');
});
