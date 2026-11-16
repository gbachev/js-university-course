import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { getOrderTotal } = await import(
    process.env.SOLUTIONS ? '../solutions/02-order-total.js' : './02-order-total.js'
);

test('the total adds price times quantity of every line', () => {
    const lines = [
        { product: 'Mug', price: 8, quantity: 2 },
        { product: 'Tea', price: 5, quantity: 1 },
    ];
    assert.equal(getOrderTotal(lines), 21);
});

test('one line is its price times its quantity', () => {
    assert.equal(getOrderTotal([{ product: 'Pen', price: 2, quantity: 5 }]), 10);
});

test('a line with a quantity of 0 adds nothing', () => {
    const lines = [
        { product: 'Mug', price: 8, quantity: 0 },
        { product: 'Tea', price: 5, quantity: 3 },
    ];
    assert.equal(getOrderTotal(lines), 15);
});

test('an empty order costs 0', () => {
    assert.equal(getOrderTotal([]), 0);
});
