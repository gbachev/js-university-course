import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { deepClone } = await import(
    process.env.SOLUTIONS ? '../solutions/04-deep-clone.js' : './04-deep-clone.js'
);

test('primitives and null come back as they are', () => {
    assert.equal(deepClone(42), 42);
    assert.equal(deepClone('Dune'), 'Dune');
    assert.equal(deepClone(null), null);
    assert.equal(deepClone(undefined), undefined);
});

test('changing a nested object of the copy leaves the original alone', () => {
    const order = { id: 7, customer: { name: 'Jane Doe', address: { city: 'Sofia' } } };
    const copy = deepClone(order);
    copy.customer.address.city = 'Plovdiv';
    assert.equal(order.customer.address.city, 'Sofia');
    assert.deepEqual(copy, {
        id: 7,
        customer: { name: 'Jane Doe', address: { city: 'Plovdiv' } },
    });
});

test('arrays, nested ones included, are copied as arrays', () => {
    const order = { items: [{ title: 'Dune' }, ['gift wrap', 'card']] };
    const copy = deepClone(order);
    copy.items[0].title = 'Emma';
    copy.items[1].push('ribbon');
    assert.equal(Array.isArray(copy.items), true);
    assert.deepEqual(order.items, [{ title: 'Dune' }, ['gift wrap', 'card']]);
});

test('a Date is copied as a new Date with the same time', () => {
    const order = { placedAt: new Date('2026-11-16T10:00:00Z') };
    const copy = deepClone(order);
    assert.equal(copy.placedAt instanceof Date, true);
    assert.notEqual(copy.placedAt, order.placedAt);
    assert.equal(copy.placedAt.getTime(), order.placedAt.getTime());
});

test('an object that refers to itself is copied without a stack overflow', () => {
    const user = { name: 'Jane Doe' };
    user.self = user;
    const copy = deepClone(user);
    assert.notEqual(copy, user);
    assert.equal(copy.self, copy);
});

test('a cycle through a child points back to the copy', () => {
    const order = { id: 7, items: [] };
    order.items.push({ title: 'Dune', order });
    const copy = deepClone(order);
    assert.equal(copy.items[0].order, copy);
});
