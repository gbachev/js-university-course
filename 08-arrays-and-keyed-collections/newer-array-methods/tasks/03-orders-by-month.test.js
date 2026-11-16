import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { ordersByMonth, monthTotal } = await import(
    process.env.SOLUTIONS ? '../solutions/03-orders-by-month.js' : './03-orders-by-month.js'
);

const orders = [
    { id: 1, date: '2026-03-14', total: 120 },
    { id: 2, date: '2026-04-02', total: 35 },
    { id: 3, date: '2026-03-28', total: 80 },
    { id: 4, date: '2025-03-09', total: 15 },
];

test('the orders are grouped by year and month', () => {
    const byMonth = ordersByMonth(orders);
    assert.deepEqual(Object.keys(byMonth), ['2026-03', '2026-04', '2025-03']);
    assert.deepEqual(byMonth['2026-03'], [orders[0], orders[2]]);
    assert.deepEqual(byMonth['2026-04'], [orders[1]]);
});

test('each group holds the same order objects, not copies', () => {
    assert.equal(ordersByMonth(orders)['2026-04'][0], orders[1]);
});

test('a month with no orders has no key', () => {
    assert.equal(Object.hasOwn(ordersByMonth(orders), '2026-05'), false);
});

test('no orders give no groups', () => {
    assert.deepEqual(Object.keys(ordersByMonth([])), []);
});

test('the total of a month adds up only that month', () => {
    assert.equal(monthTotal(orders, '2026-03'), 200);
    assert.equal(monthTotal(orders, '2025-03'), 15);
});

test('the total of a month without orders is 0', () => {
    assert.equal(monthTotal(orders, '2026-05'), 0);
});
