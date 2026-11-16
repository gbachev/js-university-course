import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { receiptLine } = await import(
    process.env.SOLUTIONS ? '../solutions/02-receipt-line.js' : './02-receipt-line.js'
);

test('the total adds the shipping to the items', () => {
    assert.equal(receiptLine(40, 5), 'Total: 45 EUR');
});

test('with free shipping the total is the price of the items', () => {
    assert.equal(receiptLine(40, 0), 'Total: 40 EUR');
});

test('bigger numbers are added too', () => {
    assert.equal(receiptLine(120, 15), 'Total: 135 EUR');
});
