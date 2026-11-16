import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { filterOrders } = await import(
    process.env.SOLUTIONS ? '../solutions/01-filter-orders.js' : './01-filter-orders.js'
);

const orders = [
    { id: 1, status: 'paid', amountCents: 2500 },
    { id: 2, status: 'shipped', amountCents: 4000 },
    { id: 3, status: 'paid', amountCents: 1550 },
    { id: 4, status: 'cancelled', amountCents: 990 },
];

test('a known status keeps only the orders with that status', () => {
    const ids = (list) => list.map((order) => order.id);
    assert.deepEqual(ids(filterOrders(orders, 'paid')), [1, 3]);
    assert.deepEqual(ids(filterOrders(orders, 'cancelled')), [4]);
});

test('all keeps every order', () => {
    assert.deepEqual(filterOrders(orders, 'all'), orders);
});

test('an unknown status throws an error that names it', () => {
    assert.throws(() => filterOrders(orders, 'lost'), {
        name: 'Error',
        message: 'Unknown status: lost',
    });
    assert.throws(() => filterOrders(orders, 'Paid'), {
        message: 'Unknown status: Paid',
    });
});

test('an empty list gives an empty list', () => {
    assert.deepEqual(filterOrders([], 'shipped'), []);
    assert.deepEqual(filterOrders([], 'all'), []);
});

test('a missing list gives an empty list', () => {
    assert.deepEqual(filterOrders(undefined, 'paid'), []);
    assert.deepEqual(filterOrders(null, 'all'), []);
});

test('an unknown status throws even for an empty or missing list', () => {
    assert.throws(() => filterOrders([], 'lost'), { message: 'Unknown status: lost' });
    assert.throws(() => filterOrders(undefined, 'lost'), {
        message: 'Unknown status: lost',
    });
});

test('the list we pass in is not changed', () => {
    const copy = structuredClone(orders);
    filterOrders(orders, 'paid');
    assert.deepEqual(orders, copy);
});
