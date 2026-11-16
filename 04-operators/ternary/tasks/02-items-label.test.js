import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { itemsLabel } = await import(
    process.env.SOLUTIONS ? '../solutions/02-items-label.js' : './02-items-label.js'
);

test('one item is written in the singular', () => {
    assert.equal(itemsLabel(1), '1 item');
});

test('more items are written in the plural', () => {
    assert.equal(itemsLabel(3), '3 items');
    assert.equal(itemsLabel(12), '12 items');
});

test('an empty cart is written in the plural too', () => {
    assert.equal(itemsLabel(0), '0 items');
});
