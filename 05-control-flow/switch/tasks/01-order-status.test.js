import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { getOrderStatusMessage } = await import(
    process.env.SOLUTIONS ? '../solutions/01-order-status.js' : './01-order-status.js'
);

test('a pending order says we received it', () => {
    assert.equal(getOrderStatusMessage('pending'), 'We received your order.');
});

test('a shipped order says it is on its way', () => {
    assert.equal(getOrderStatusMessage('shipped'), 'Your order is on its way.');
});

test('a delivered order says it has arrived', () => {
    assert.equal(getOrderStatusMessage('delivered'), 'Your order has arrived.');
});

test('a status we do not know gets the unknown message', () => {
    assert.equal(getOrderStatusMessage('lost'), 'Unknown order status.');
});

test('a status with a capital letter is unknown, the match is strict', () => {
    assert.equal(getOrderStatusMessage('Shipped'), 'Unknown order status.');
});
