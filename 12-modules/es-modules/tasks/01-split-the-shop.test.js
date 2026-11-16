import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const shop = await import(
    process.env.SOLUTIONS ? '../solutions/01-split-the-shop.js' : './01-split-the-shop.js'
);
const folder = process.env.SOLUTIONS
    ? '../solutions/01-split-the-shop'
    : './01-split-the-shop';
const prices = await import(`${folder}/prices.js`);
const cart = await import(`${folder}/cart.js`);

test('prices.js exports the VAT rate, addVat and formatPrice', () => {
    assert.equal(prices.VAT_RATE, 0.2);
    assert.equal(prices.addVat(25), 30);
    assert.equal(prices.addVat(9.99), 11.99);
    assert.equal(prices.formatPrice(30), '€30.00');
});

test('round stays private to prices.js', () => {
    assert.equal(prices.round, undefined);
    assert.equal(shop.round, undefined);
});

test('cart.js exports cartTotal, which adds the prices with VAT', () => {
    assert.equal(cart.cartTotal([{ price: 10 }, { price: 2.5 }]), 15);
    assert.equal(cart.cartTotal([]), 0);
});

test('the shop file passes on the functions of prices.js and cart.js', () => {
    assert.equal(shop.addVat, prices.addVat);
    assert.equal(shop.formatPrice, prices.formatPrice);
    assert.equal(shop.cartTotal, cart.cartTotal);
});

test('the shop file exports only addVat, cartTotal and formatPrice', () => {
    assert.deepEqual(Object.keys(shop), ['addVat', 'cartTotal', 'formatPrice']);
});
