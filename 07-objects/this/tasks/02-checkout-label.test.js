import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { createOrder, checkoutLabel } = await import(
    process.env.SOLUTIONS ? '../solutions/02-checkout-label.js' : './02-checkout-label.js'
);

test('the label shows the total of the order', () => {
    assert.equal(checkoutLabel(createOrder(30, 15)), 'To pay: 45 EUR');
});

test('an order with free shipping', () => {
    assert.equal(checkoutLabel(createOrder(80, 0)), 'To pay: 80 EUR');
});

test('an empty order costs 0', () => {
    assert.equal(checkoutLabel(createOrder(0, 0)), 'To pay: 0 EUR');
});

test('the label follows a change to the order', () => {
    const order = createOrder(30, 15);
    order.shipping = 5;
    assert.equal(checkoutLabel(order), 'To pay: 35 EUR');
});

test('the label works for any object with a total() method', () => {
    const giftCard = {
        amount: 25,
        total() {
            return this.amount;
        },
    };
    assert.equal(checkoutLabel(giftCard), 'To pay: 25 EUR');
});
