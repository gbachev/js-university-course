import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { Cart } = await import(
    process.env.SOLUTIONS ? '../solutions/02-add-all.js' : './02-add-all.js'
);

test('adds every product of the list to the cart', () => {
    const cart = new Cart();
    cart.addAll(['book', 'pen']);
    assert.deepEqual(cart.items, ['book', 'pen']);
});

test('keeps the products already in the cart', () => {
    const cart = new Cart();
    cart.add('lamp');
    cart.addAll(['book', 'pen']);
    assert.deepEqual(cart.items, ['lamp', 'book', 'pen']);
});

test('an empty list leaves the cart as it is', () => {
    const cart = new Cart();
    cart.addAll([]);
    assert.deepEqual(cart.items, []);
});

test('two carts keep their products apart', () => {
    const mine = new Cart();
    const yours = new Cart();
    mine.addAll(['book']);
    yours.addAll(['pen', 'mug']);
    assert.deepEqual(mine.items, ['book']);
    assert.deepEqual(yours.items, ['pen', 'mug']);
});
