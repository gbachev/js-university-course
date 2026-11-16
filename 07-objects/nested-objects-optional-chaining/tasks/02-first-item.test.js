import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { getFirstItemName } = await import(
    process.env.SOLUTIONS ? '../solutions/02-first-item.js' : './02-first-item.js'
);

test('returns the name of the first item', () => {
    const order = {
        id: 1,
        items: [
            { name: 'Hat', price: 15 },
            { name: 'Scarf', price: 22 },
        ],
    };
    assert.equal(getFirstItemName(order), 'Hat');
});

test('an order without items gives undefined', () => {
    assert.equal(getFirstItemName({ id: 2 }), undefined);
});

test('an order with an empty items array gives undefined', () => {
    assert.equal(getFirstItemName({ id: 3, items: [] }), undefined);
});

test('items set to null gives undefined', () => {
    assert.equal(getFirstItemName({ id: 4, items: null }), undefined);
});
