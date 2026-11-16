import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { discountedPrice, shippingFor } = await import(
    process.env.SOLUTIONS ? '../solutions/03-short-arrows.js' : './03-short-arrows.js'
);

test('discountedPrice takes the percent off the price', () => {
    assert.equal(discountedPrice(80, 25), 60);
});

test('discountedPrice rounds to cents', () => {
    assert.equal(discountedPrice(19.99, 10), 17.99);
});

test('a discount of 0 percent keeps the price', () => {
    assert.equal(discountedPrice(35, 0), 35);
});

test('shipping is free from 50 up', () => {
    assert.equal(shippingFor(50), 0);
    assert.equal(shippingFor(120), 0);
});

test('shipping costs 4.99 below 50', () => {
    assert.equal(shippingFor(49.99), 4.99);
    assert.equal(shippingFor(0), 4.99);
});
