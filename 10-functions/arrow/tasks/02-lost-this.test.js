import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { shop } = await import(
    process.env.SOLUTIONS ? '../solutions/02-lost-this.js' : './02-lost-this.js'
);

test('a call does not throw', () => {
    assert.doesNotThrow(() => shop.discountedPrices([100]));
});

test('every price gets the discount of the shop', () => {
    assert.deepEqual(shop.discountedPrices([100, 50]), [90, 45]);
});

test('a copy of the shop with another discount uses its own discount', () => {
    const sale = { ...shop, discount: 25 };
    assert.deepEqual(sale.discountedPrices([100, 40]), [75, 30]);
});

test('no prices give an empty array', () => {
    assert.deepEqual(shop.discountedPrices([]), []);
});

test('the prices we pass are not changed', () => {
    const prices = [100, 50];
    shop.discountedPrices(prices);
    assert.deepEqual(prices, [100, 50]);
});
