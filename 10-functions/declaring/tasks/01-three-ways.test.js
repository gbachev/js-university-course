import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { itemTotal, formatEuro, isExpensive } = await import(
    process.env.SOLUTIONS ? '../solutions/01-three-ways.js' : './01-three-ways.js'
);

test('itemTotal multiplies the price by the quantity', () => {
    assert.equal(itemTotal(4, 3), 12);
    assert.equal(itemTotal(19.5, 2), 39);
});

test('formatEuro shows the amount with 2 decimals and EUR', () => {
    assert.equal(formatEuro(12.5), '12.50 EUR');
    assert.equal(formatEuro(3), '3.00 EUR');
});

test('isExpensive is true for a price over 100', () => {
    assert.equal(isExpensive(150), true);
});

test('isExpensive is false for 100 and less', () => {
    assert.equal(isExpensive(100), false);
    assert.equal(isExpensive(20), false);
});
