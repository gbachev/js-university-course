import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { getLastItem } = await import(
    process.env.SOLUTIONS ? '../solutions/01-last-item.js' : './01-last-item.js'
);

test('the last of three items is the third one', () => {
    assert.equal(getLastItem(['milk', 'bread', 'eggs']), 'eggs');
});

test('a cart with one item gives that item', () => {
    assert.equal(getLastItem(['coffee']), 'coffee');
});

test('an empty cart has no last item', () => {
    assert.equal(getLastItem([]), undefined);
});

test('the cart is not changed', () => {
    const cart = ['milk', 'bread'];
    getLastItem(cart);
    assert.deepEqual(cart, ['milk', 'bread']);
});
