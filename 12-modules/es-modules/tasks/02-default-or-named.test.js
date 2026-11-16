import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { cartSummary } = await import(
    process.env.SOLUTIONS ? '../solutions/02-default-or-named.js' : './02-default-or-named.js'
);

test('one line with the number of items and the total', () => {
    assert.equal(cartSummary([{ price: 5, quantity: 3 }]), '3 items, €15.00');
});

test('the count adds up the quantities, the total adds up price times quantity', () => {
    const items = [
        { price: 10, quantity: 1 },
        { price: 2.5, quantity: 2 },
    ];
    assert.equal(cartSummary(items), '3 items, €15.00');
});

test('a cart with one item says item, not items', () => {
    assert.equal(cartSummary([{ price: 19.99, quantity: 1 }]), '1 item, €19.99');
});

test('an empty cart has 0 items and a total of €0.00', () => {
    assert.equal(cartSummary([]), '0 items, €0.00');
});
