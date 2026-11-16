import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
// The default import of a CommonJS file is its module.exports.
const { default: report } = await import(
    process.env.SOLUTIONS ? '../solutions/02-cart-report.cjs' : './02-cart-report.cjs'
);

test('the report shows the total and the currency', () => {
    assert.equal(report.cartReport([10, 2.5]), 'Total: 12.5 EUR');
});

test('a cart with one price', () => {
    assert.equal(report.cartReport([19.99]), 'Total: 19.99 EUR');
});

test('an empty cart has a total of 0', () => {
    assert.equal(report.cartReport([]), 'Total: 0 EUR');
});
