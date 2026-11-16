import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { sortByPlacedAt } = await import(
    process.env.SOLUTIONS
        ? '../solutions/02-oldest-order-first.js'
        : './02-oldest-order-first.js'
);

function makeOrders() {
    return [
        { id: 3, placedAt: new Date('2026-03-04T15:00:00Z') },
        { id: 1, placedAt: new Date('2026-02-27T08:00:00Z') },
        { id: 4, placedAt: new Date('2026-03-10T11:15:00Z') },
        { id: 2, placedAt: new Date('2026-03-01T09:30:00Z') },
    ];
}

function ids(orders) {
    return orders.map((order) => order.id);
}

test('the orders come back oldest first', () => {
    assert.deepEqual(ids(sortByPlacedAt(makeOrders())), [1, 2, 3, 4]);
});

test('orders a few minutes apart are sorted too', () => {
    const orders = [
        { id: 'b', placedAt: new Date('2026-03-01T09:45:00Z') },
        { id: 'a', placedAt: new Date('2026-03-01T09:30:00Z') },
    ];
    assert.deepEqual(ids(sortByPlacedAt(orders)), ['a', 'b']);
});

test('orders placed at the same moment keep their order', () => {
    const orders = [
        { id: 'first', placedAt: new Date('2026-03-01T09:30:00Z') },
        { id: 'second', placedAt: new Date('2026-03-01T09:30:00Z') },
        { id: 'older', placedAt: new Date('2026-02-01T09:30:00Z') },
    ];
    assert.deepEqual(ids(sortByPlacedAt(orders)), ['older', 'first', 'second']);
});

test('the array we pass in does not change', () => {
    const orders = makeOrders();
    sortByPlacedAt(orders);
    assert.deepEqual(ids(orders), [3, 1, 4, 2]);
});

test('an empty list gives an empty list', () => {
    assert.deepEqual(sortByPlacedAt([]), []);
});
