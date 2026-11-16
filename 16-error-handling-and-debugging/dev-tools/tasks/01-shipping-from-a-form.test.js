import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { orderTotal } = await import(
    process.env.SOLUTIONS ? '../solutions/01-shipping-from-a-form.js' : './01-shipping-from-a-form.js'
);

test('shipping as a number is added to the lines', () => {
    const order = { lines: [{ price: 10, quantity: 2 }], shipping: 5 };
    assert.equal(orderTotal(order), 25);
});

test('shipping as a string from the form is added, not glued on', () => {
    const order = { lines: [{ price: 10, quantity: 2 }], shipping: '5.5' };
    assert.equal(orderTotal(order), 25.5);
});

test('several lines and free shipping written as a string', () => {
    const order = {
        lines: [
            { price: 12, quantity: 1 },
            { price: 3, quantity: 4 }
        ],
        shipping: '0'
    };
    assert.equal(orderTotal(order), 24);
});

test('an order with no lines costs only the shipping', () => {
    assert.equal(orderTotal({ lines: [], shipping: '6' }), 6);
});
