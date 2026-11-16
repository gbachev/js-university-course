import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { Product, toProduct } = await import(
    process.env.SOLUTIONS
        ? '../solutions/03-make-it-a-product.js'
        : './03-make-it-a-product.js'
);

test('a product is returned as it is', () => {
    const hat = new Product('Hat', 15);
    assert.equal(toProduct(hat), hat);
});

test('a plain object becomes a Product', () => {
    assert.equal(toProduct({ name: 'Scarf', price: 22 }) instanceof Product, true);
});

test('the new product has the name and the price of the item', () => {
    const product = toProduct({ name: 'Scarf', price: 22 });
    assert.equal(product.name, 'Scarf');
    assert.equal(product.price, 22);
});

test('the plain object itself is not returned', () => {
    const item = { name: 'Scarf', price: 22 };
    assert.notEqual(toProduct(item), item);
});
