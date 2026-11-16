import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { describeOrder } = await import(
    process.env.SOLUTIONS ? '../solutions/02-order-summary.js' : './02-order-summary.js'
);

test('lists every property as key: value, separated by commas', () => {
    assert.equal(
        describeOrder({ id: 42, customer: 'John Doe', total: 30 }),
        'id: 42, customer: John Doe, total: 30'
    );
});

test('keeps the order in which the properties were written', () => {
    assert.equal(describeOrder({ total: 30, id: 42 }), 'total: 30, id: 42');
});

test('an order with one property has no comma', () => {
    assert.equal(describeOrder({ id: 7 }), 'id: 7');
});

test('an empty order gives an empty string', () => {
    assert.equal(describeOrder({}), '');
});
