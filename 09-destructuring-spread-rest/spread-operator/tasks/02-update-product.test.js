import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { updateProduct } = await import(
    process.env.SOLUTIONS ? '../solutions/02-update-product.js' : './02-update-product.js'
);

test('a change overwrites the old value', () => {
    const product = { id: 7, name: 'Laptop', price: 999 };

    assert.deepEqual(updateProduct(product, { price: 899 }), {
        id: 7,
        name: 'Laptop',
        price: 899,
    });
});

test('a new field is added to the product', () => {
    const product = { id: 7, name: 'Laptop', price: 999 };

    assert.deepEqual(updateProduct(product, { inStock: false }), {
        id: 7,
        name: 'Laptop',
        price: 999,
        inStock: false,
    });
});

test('the id stays the same even when the changes have an id', () => {
    const product = { id: 7, name: 'Laptop', price: 999 };

    assert.deepEqual(updateProduct(product, { id: 1, name: 'Notebook' }), {
        id: 7,
        name: 'Notebook',
        price: 999,
    });
});

test('the product and the changes we got do not change', () => {
    const product = { id: 7, name: 'Laptop', price: 999 };
    const changes = { id: 1, price: 899 };
    updateProduct(product, changes);

    assert.deepEqual(product, { id: 7, name: 'Laptop', price: 999 });
    assert.deepEqual(changes, { id: 1, price: 899 });
});
