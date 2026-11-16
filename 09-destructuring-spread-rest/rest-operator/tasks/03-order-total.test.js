import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { getOrderTotal } = await import(
    process.env.SOLUTIONS ? '../solutions/03-order-total.js' : './03-order-total.js'
);

test('the prices of the items and the shipping add up', () => {
    assert.equal(getOrderTotal(5, 12.5, 7.5), 25);
});

test('an order with one item costs the item plus the shipping', () => {
    assert.equal(getOrderTotal(5, 40), 45);
});

test('any number of items is counted', () => {
    assert.equal(getOrderTotal(4, 10, 20, 30, 40, 50), 154);
});

test('free shipping adds nothing', () => {
    assert.equal(getOrderTotal(0, 10, 20), 30);
});

test('an order with no items costs nothing', () => {
    assert.equal(getOrderTotal(5), 0);
});
