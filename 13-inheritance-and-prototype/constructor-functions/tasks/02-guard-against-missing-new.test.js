import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { Order } = await import(
    process.env.SOLUTIONS
        ? '../solutions/02-guard-against-missing-new.js'
        : './02-guard-against-missing-new.js'
);

test('an order created with new stores its id and total', () => {
    const order = new Order(42, 99.5);
    assert.equal(order.id, 42);
    assert.equal(order.total, 99.5);
});

test('summary still works on an order', () => {
    assert.equal(new Order(42, 99.5).summary(), 'Order 42: 99.50 EUR');
});

test('a call without new throws a TypeError with a clear message', () => {
    assert.throws(() => Order(42, 99.5), {
        name: 'TypeError',
        message: 'Order must be called with new'
    });
});

test('a call without new and without arguments throws the same error', () => {
    assert.throws(() => Order(), {
        name: 'TypeError',
        message: 'Order must be called with new'
    });
});
