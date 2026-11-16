import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { countByStatus } = await import(
    process.env.SOLUTIONS ? '../solutions/03-orders-by-status.js' : './03-orders-by-status.js'
);

test('orders are counted per status', () => {
    const orders = [
        { id: 1, status: 'shipped' },
        { id: 2, status: 'pending' },
        { id: 3, status: 'shipped' },
    ];
    assert.deepEqual(countByStatus(orders), { shipped: 2, pending: 1 });
});

test('one order gives one status with a count of 1', () => {
    assert.deepEqual(countByStatus([{ id: 7, status: 'cancelled' }]), { cancelled: 1 });
});

test('all orders with the same status give one property', () => {
    const orders = [
        { id: 1, status: 'pending' },
        { id: 2, status: 'pending' },
    ];
    assert.deepEqual(countByStatus(orders), { pending: 2 });
});

test('no orders give an empty object', () => {
    assert.deepEqual(countByStatus([]), {});
});
