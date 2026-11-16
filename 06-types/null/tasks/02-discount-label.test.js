import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { discountLabel } = await import(
    process.env.SOLUTIONS ? '../solutions/02-discount-label.js' : './02-discount-label.js'
);

test('a discount gets a label with its percent', () => {
    assert.equal(discountLabel(20), '20% off');
});

test('null means there is no discount', () => {
    assert.equal(discountLabel(null), 'No discount');
});

test('a discount of 0 is still a discount that was set', () => {
    assert.equal(discountLabel(0), '0% off');
});

test('a discount with decimals keeps them', () => {
    assert.equal(discountLabel(12.5), '12.5% off');
});
