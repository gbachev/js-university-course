import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { createOrder } = await import(
    process.env.SOLUTIONS ? '../solutions/01-new-order.js' : './01-new-order.js'
);

test('the order has the id, the customer and the total', () => {
    const order = createOrder(7, 'Jane', 30);
    assert.equal(order.id, 7);
    assert.equal(order.customer, 'Jane');
    assert.equal(order.total, 30);
});

test('describe returns one line about the order', () => {
    assert.equal(createOrder(7, 'Jane', 30).describe(), 'Order 7 for Jane: 30 EUR');
});

test('describe uses the current values of the order', () => {
    const order = createOrder(12, 'Ben', 45);
    order.total = 50;
    assert.equal(order.describe(), 'Order 12 for Ben: 50 EUR');
});

test('the order has exactly these properties', () => {
    const keys = Object.keys(createOrder(7, 'Jane', 30)).sort();
    assert.deepEqual(keys, ['customer', 'describe', 'id', 'total']);
});
