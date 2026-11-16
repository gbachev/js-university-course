import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { InventoryItem } = await import(
    process.env.SOLUTIONS ? '../solutions/01-private-stock.js' : './01-private-stock.js'
);

test('the stock can be read', () => {
    assert.equal(new InventoryItem('Desk lamp', 10).stock, 10);
});

test('remove lowers the stock', () => {
    const lamp = new InventoryItem('Desk lamp', 10);
    lamp.remove(3);
    lamp.remove(7);
    assert.equal(lamp.stock, 0);
});

test('removing more than we have throws and keeps the stock', () => {
    const lamp = new InventoryItem('Desk lamp', 10);
    assert.throws(() => lamp.remove(20), { name: 'RangeError', message: 'Not enough stock' });
    assert.equal(lamp.stock, 10);
});

test('the stock cannot be set from outside', () => {
    const lamp = new InventoryItem('Desk lamp', 10);
    assert.throws(() => {
        lamp.stock = 1000;
    }, TypeError);
    assert.equal(lamp.stock, 10);
});

test('the stock is not an own property', () => {
    const lamp = new InventoryItem('Desk lamp', 10);
    assert.deepEqual(Object.keys(lamp), ['title']);
    assert.equal(JSON.stringify(lamp), '{"title":"Desk lamp"}');
});
