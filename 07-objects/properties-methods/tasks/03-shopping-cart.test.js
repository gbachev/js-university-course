import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { createCart } = await import(
    process.env.SOLUTIONS ? '../solutions/03-shopping-cart.js' : './03-shopping-cart.js'
);

test('an empty cart has 0 items', () => {
    assert.equal(createCart().totalItems, 0);
});

test('add puts the product and its quantity in the cart', () => {
    const cart = createCart();
    cart.add('Socks', 2);
    assert.deepEqual(cart.items, { Socks: 2 });
});

test('adding a product that is already in the cart adds up the quantity', () => {
    const cart = createCart();
    cart.add('Socks', 2);
    cart.add('Socks', 3);
    assert.deepEqual(cart.items, { Socks: 5 });
});

test('add and remove return the cart, so the calls can be chained', () => {
    const cart = createCart();
    assert.equal(cart.add('Socks', 2), cart);
    assert.equal(cart.remove('Socks'), cart);
});

test('totalItems adds up the quantities of all products', () => {
    assert.equal(createCart().add('Socks', 2).add('Hat', 1).totalItems, 3);
});

test('remove takes the product out of the cart', () => {
    const cart = createCart().add('Socks', 2).add('Hat', 1).remove('Socks');
    assert.deepEqual(cart.items, { Hat: 1 });
    assert.equal(cart.totalItems, 1);
});
