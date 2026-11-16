import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { groupBy } = await import(
    process.env.SOLUTIONS ? '../solutions/06-group-by.js' : './06-group-by.js'
);

const orders = [
    { id: 1, status: 'paid', total: 12 },
    { id: 2, status: 'shipped', total: 45 },
    { id: 3, status: 'paid', total: 120 },
    { id: 4, status: 'cancelled', total: 8 },
];

test('orders are grouped by their status', () => {
    assert.deepEqual(groupBy(orders, (order) => order.status), {
        paid: [orders[0], orders[2]],
        shipped: [orders[1]],
        cancelled: [orders[3]],
    });
});

test('the key can be computed from the item', () => {
    const groups = groupBy(orders, (order) => (order.total >= 40 ? 'large' : 'small'));
    assert.deepEqual(groups.large.map((order) => order.id), [2, 3]);
    assert.deepEqual(groups.small.map((order) => order.id), [1, 4]);
});

test('items keep the order they came in', () => {
    const groups = groupBy(['Dune', 'Emma', 'Dracula', 'Eragon'], (title) => title[0]);
    assert.deepEqual(groups, { D: ['Dune', 'Dracula'], E: ['Emma', 'Eragon'] });
});

test('an empty list gives an empty object', () => {
    assert.deepEqual(groupBy([], (order) => order.status), {});
});

test('the items themselves are not copied or changed', () => {
    const groups = groupBy(orders, (order) => order.status);
    assert.equal(groups.paid[0], orders[0]);
    assert.equal(orders.length, 4);
});
