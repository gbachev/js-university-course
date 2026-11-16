import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { getTotalQuantity } = await import(
    process.env.SOLUTIONS
        ? '../solutions/03-items-in-the-cart.js'
        : './03-items-in-the-cart.js'
);

test('adds up the quantities of every product', () => {
    assert.equal(getTotalQuantity({ 'T-shirt': 2, Socks: 3 }), 5);
});

test('a cart with one product holds its quantity', () => {
    assert.equal(getTotalQuantity({ Mug: 4 }), 4);
});

test('an empty cart holds 0 items', () => {
    assert.equal(getTotalQuantity({}), 0);
});
