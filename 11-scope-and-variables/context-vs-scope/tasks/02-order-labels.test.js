import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { createOrder } = await import(
    process.env.SOLUTIONS ? '../solutions/02-order-labels.js' : './02-order-labels.js'
);

test('every item gets a label with the currency of the order', () => {
    const order = createOrder(
        [
            { name: 'Book', price: 12.5 },
            { name: 'Pen', price: 2 },
        ],
        'EUR'
    );
    assert.deepEqual(order.labels(), ['Book: 12.50 EUR', 'Pen: 2.00 EUR']);
});

test('a change of currency shows in the next labels', () => {
    const order = createOrder([{ name: 'Mug', price: 8 }], 'EUR');
    order.currency = 'USD';
    assert.deepEqual(order.labels(), ['Mug: 8.00 USD']);
});

test('an order without items has no labels', () => {
    assert.deepEqual(createOrder([], 'EUR').labels(), []);
});
