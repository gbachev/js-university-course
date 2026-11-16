import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { Product } = await import(
    process.env.SOLUTIONS
        ? '../solutions/01-readable-product.js'
        : './01-readable-product.js'
);

test('a template literal shows the title and the price', () => {
    const lamp = new Product('Desk lamp', 24.5);
    assert.equal(`You bought ${lamp}`, 'You bought Desk lamp (24.50 EUR)');
});

test('String() uses the same text', () => {
    assert.equal(String(new Product('Pen', 2)), 'Pen (2.00 EUR)');
});

test('join() turns every product into its text', () => {
    const products = [new Product('Desk lamp', 24.5), new Product('Pen', 2)];
    assert.equal(products.join(', '), 'Desk lamp (24.50 EUR), Pen (2.00 EUR)');
});

test('the text follows a changed price', () => {
    const lamp = new Product('Desk lamp', 24.5);
    lamp.price = 19.9;
    assert.equal(`${lamp}`, 'Desk lamp (19.90 EUR)');
});

test('toString lives on the prototype of Product', () => {
    assert.equal(Object.hasOwn(Product.prototype, 'toString'), true);
});
