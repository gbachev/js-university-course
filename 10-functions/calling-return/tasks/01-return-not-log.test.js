import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { formatPrice } = await import(
    process.env.SOLUTIONS ? '../solutions/01-return-not-log.js' : './01-return-not-log.js'
);

test('the price comes back with 2 decimals and EUR', () => {
    assert.equal(formatPrice(12.5), '12.50 EUR');
});

test('a whole price gets .00', () => {
    assert.equal(formatPrice(3), '3.00 EUR');
});

test('a price of 0 is 0.00 EUR', () => {
    assert.equal(formatPrice(0), '0.00 EUR');
});

test('nothing is printed to the console', (t) => {
    // t.mock restores console.log when the test ends, even if our code throws.
    const log = t.mock.method(console, 'log', () => {});
    formatPrice(12.5);
    assert.equal(log.mock.callCount(), 0);
});
