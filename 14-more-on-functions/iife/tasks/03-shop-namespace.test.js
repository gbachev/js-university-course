import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { Shop } = await import(
    process.env.SOLUTIONS ? '../solutions/03-shop-namespace.js' : './03-shop-namespace.js'
);

test('the namespace gets a priceWithVat function', () => {
    assert.equal(typeof Shop.priceWithVat, 'function');
});

test('priceWithVat adds 20% VAT', () => {
    assert.equal(Shop.priceWithVat(100), 120);
    assert.equal(Shop.priceWithVat(50), 60);
});

test('a price of 0 stays 0', () => {
    assert.equal(Shop.priceWithVat(0), 0);
});

test('the VAT rate stays private and the namespace keeps its name', () => {
    assert.deepEqual(Object.keys(Shop), ['name', 'priceWithVat']);
    assert.equal(Shop.name, 'Corner Books');
});
