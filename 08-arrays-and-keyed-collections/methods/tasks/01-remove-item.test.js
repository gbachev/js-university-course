import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { removeItem } = await import(
    process.env.SOLUTIONS ? '../solutions/01-remove-item.js' : './01-remove-item.js'
);

test('a product in the middle of the cart is removed', () => {
    assert.deepEqual(removeItem(['milk', 'bread', 'eggs'], 'bread'), ['milk', 'eggs']);
});

test('the cart we pass in is changed', () => {
    const cart = ['milk', 'bread', 'eggs'];
    removeItem(cart, 'eggs');
    assert.deepEqual(cart, ['milk', 'bread']);
});

test('the first product of the cart can be removed', () => {
    assert.deepEqual(removeItem(['milk', 'bread'], 'milk'), ['bread']);
});

test('only the first of two equal products is removed', () => {
    assert.deepEqual(removeItem(['tea', 'milk', 'tea'], 'tea'), ['milk', 'tea']);
});

test('a product that is not in the cart changes nothing', () => {
    assert.deepEqual(removeItem(['milk', 'bread'], 'tea'), ['milk', 'bread']);
});
