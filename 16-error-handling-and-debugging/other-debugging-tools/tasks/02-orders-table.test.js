import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { logOrders } = await import(
    process.env.SOLUTIONS ? '../solutions/02-orders-table.js' : './02-orders-table.js'
);

const orders = [
    { id: 101, customer: 'John Doe', total: 59.9 },
    { id: 102, customer: 'Jane Doe', total: 120 }
];

test('the orders are printed as one table', (t) => {
    const table = t.mock.method(console, 'table', () => {});
    logOrders(orders);
    assert.equal(table.mock.callCount(), 1);
    assert.equal(table.mock.calls[0].arguments[0], orders);
});

test('the table shows only the customer and total columns', (t) => {
    const table = t.mock.method(console, 'table', () => {});
    logOrders(orders);
    assert.deepEqual(table.mock.calls[0].arguments[1], ['customer', 'total']);
});

test('the orders are not also printed with console.log()', (t) => {
    t.mock.method(console, 'table', () => {});
    const log = t.mock.method(console, 'log', () => {});
    logOrders(orders);
    assert.equal(log.mock.callCount(), 0);
});
