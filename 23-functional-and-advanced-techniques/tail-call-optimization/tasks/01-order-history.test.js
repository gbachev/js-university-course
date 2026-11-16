import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { historyTotal } = await import(
    process.env.SOLUTIONS ? '../solutions/01-order-history.js' : './01-order-history.js'
);

function buildHistory(count, total) {
    let order = null;
    for (let id = 1; id <= count; id++) {
        order = { id, total, previous: order };
    }
    return order;
}

test('adds up an order and the orders before it', () => {
    const first = { id: 1, total: 20, previous: null };
    const second = { id: 2, total: 15, previous: first };
    const third = { id: 3, total: 5, previous: second };
    assert.equal(historyTotal(second), 35);
    assert.equal(historyTotal(third), 40);
});

test('a single order gives its own total', () => {
    assert.equal(historyTotal({ id: 1, total: 12, previous: null }), 12);
});

test('no order gives 0', () => {
    assert.equal(historyTotal(null), 0);
});

test('handles 100,000 orders without a RangeError', () => {
    assert.equal(historyTotal(buildHistory(100_000, 2)), 200_000);
});

test('does not change the orders', () => {
    const last = buildHistory(3, 10);
    historyTotal(last);
    assert.equal(last.previous.previous.id, 1);
    assert.equal(last.previous.previous.previous, null);
});
