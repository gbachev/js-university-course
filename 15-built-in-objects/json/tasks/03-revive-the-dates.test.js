import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { parseOrder } = await import(
    process.env.SOLUTIONS
        ? '../solutions/03-revive-the-dates.js'
        : './03-revive-the-dates.js'
);

const text = JSON.stringify({
    id: 1042,
    customer: 'John Doe',
    placedAt: '2026-11-15T09:30:00.000Z',
    paidAt: '2026-11-15T09:31:20.000Z',
    shippedAt: null,
    items: [{ name: 'notebook', addedAt: '2026-11-14T18:00:00.000Z' }],
});

test('placedAt becomes a Date for the same moment', () => {
    const order = parseOrder(text);
    assert.ok(order.placedAt instanceof Date);
    assert.equal(order.placedAt.getTime(), Date.UTC(2026, 10, 15, 9, 30));
});

test('every property that ends in At becomes a Date', () => {
    const order = parseOrder(text);
    assert.equal(order.paidAt.getTime(), Date.UTC(2026, 10, 15, 9, 31, 20));
});

test('a date inside a nested object becomes a Date too', () => {
    const order = parseOrder(text);
    assert.equal(order.items[0].addedAt.getTime(), Date.UTC(2026, 10, 14, 18, 0));
});

test('a null date stays null', () => {
    assert.equal(parseOrder(text).shippedAt, null);
});

test('the other properties stay as they are', () => {
    const order = parseOrder(text);
    assert.equal(order.id, 1042);
    assert.equal(order.customer, 'John Doe');
    assert.equal(order.items[0].name, 'notebook');
});
