import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { getPriceWithTax } = await import(
    process.env.SOLUTIONS ? '../solutions/01-price-with-tax.js' : './01-price-with-tax.js'
);

test('adds the tax to the price of the product', () => {
    assert.equal(getPriceWithTax({ name: 'Hat', price: 15 }, 20), 18);
});

test('works with another product and rate', () => {
    assert.equal(getPriceWithTax({ name: 'Lamp', price: 50 }, 10), 55);
});

test('a rate of 0 keeps the price', () => {
    assert.equal(getPriceWithTax({ name: 'Book', price: 30 }, 0), 30);
});

test('the product is not changed and gets no new method', () => {
    const product = { name: 'Hat', price: 15 };
    getPriceWithTax(product, 20);
    assert.deepEqual(product, { name: 'Hat', price: 15 });
});
