import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { receiptLine } = await import(
    process.env.SOLUTIONS
        ? '../solutions/02-called-too-early.js'
        : './02-called-too-early.js'
);

test('a call does not throw', () => {
    assert.doesNotThrow(() => receiptLine('Coffee', 3.5));
});

test('the line has the item and the price with 2 decimals', () => {
    assert.equal(receiptLine('Coffee', 3.5), 'Coffee: 3.50 EUR');
});

test('a whole price gets .00', () => {
    assert.equal(receiptLine('Book', 12), 'Book: 12.00 EUR');
});

test('a free item shows 0.00', () => {
    assert.equal(receiptLine('Sticker', 0), 'Sticker: 0.00 EUR');
});
