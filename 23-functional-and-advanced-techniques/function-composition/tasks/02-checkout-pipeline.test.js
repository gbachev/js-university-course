import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { applyDiscount, addTax, checkoutTotal } = await import(
    process.env.SOLUTIONS ? '../solutions/02-checkout-pipeline.js' : './02-checkout-pipeline.js'
);

const cart = [
    { title: 'Dune', price: 12.99, qty: 1 },
    { title: 'The Hobbit', price: 9.5, qty: 2 },
];

test('applyDiscount(rate) returns a step that lowers the total', () => {
    const tenOff = applyDiscount(0.1);
    assert.equal(typeof tenOff, 'function');
    assert.equal(tenOff(100), 90);
    assert.equal(applyDiscount(0.25)(40), 30);
});

test('addTax(rate) returns a step that raises the total', () => {
    assert.equal(addTax(0.2)(100), 120);
    assert.equal(addTax(0.5)(10), 15);
});

test('checkoutTotal runs subtotal, discount, tax and round in order', () => {
    assert.equal(checkoutTotal(0.1, 0.2)(cart), 34.55);
});

test('rates of 0 change nothing but the rounding', () => {
    assert.equal(checkoutTotal(0, 0)(cart), 31.99);
    assert.equal(checkoutTotal(0, 0)([]), 0);
});

test('one pipeline can total many carts', () => {
    const blackFriday = checkoutTotal(0.5, 0.2);
    assert.equal(blackFriday([{ price: 10, qty: 3 }]), 18);
    assert.equal(blackFriday([{ price: 4.99, qty: 1 }]), 2.99);
});

test('the cart stays as it was', () => {
    const before = structuredClone(cart);
    checkoutTotal(0.1, 0.2)(cart);
    assert.deepEqual(cart, before);
});
