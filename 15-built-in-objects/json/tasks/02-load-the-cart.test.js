import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { loadCart } = await import(
    process.env.SOLUTIONS ? '../solutions/02-load-the-cart.js' : './02-load-the-cart.js'
);

test('valid JSON gives back the saved cart', () => {
    assert.deepEqual(loadCart('{"items":["notebook","pen"],"coupon":"SPRING26"}'), {
        items: ['notebook', 'pen'],
        coupon: 'SPRING26',
    });
});

test('broken JSON gives an empty cart instead of throwing', () => {
    assert.deepEqual(loadCart('{items: [pen]}'), { items: [] });
});

test('a trailing comma is broken JSON too', () => {
    assert.deepEqual(loadCart('{"items":["pen"],}'), { items: [] });
});

test('an empty string gives an empty cart', () => {
    assert.deepEqual(loadCart(''), { items: [] });
});

test('null (nothing saved) gives an empty cart', () => {
    assert.deepEqual(loadCart(null), { items: [] });
});

test('every empty cart is a new object', () => {
    assert.notEqual(loadCart(''), loadCart(''));
});
