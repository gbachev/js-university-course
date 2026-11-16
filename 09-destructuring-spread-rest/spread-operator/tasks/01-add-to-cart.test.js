import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { addToCart } = await import(
    process.env.SOLUTIONS ? '../solutions/01-add-to-cart.js' : './01-add-to-cart.js'
);

test('the new product goes at the end of the cart', () => {
    assert.deepEqual(addToCart(['Laptop', 'Mouse'], 'Keyboard'), [
        'Laptop',
        'Mouse',
        'Keyboard',
    ]);
});

test('a product goes into an empty cart', () => {
    assert.deepEqual(addToCart([], 'Laptop'), ['Laptop']);
});

test('the cart we got does not change', () => {
    const cart = ['Laptop', 'Mouse'];
    addToCart(cart, 'Keyboard');

    assert.deepEqual(cart, ['Laptop', 'Mouse']);
});

test('we get a new array, not the same cart', () => {
    const cart = ['Laptop'];

    assert.notEqual(addToCart(cart, 'Mouse'), cart);
});
