import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { sortBy } = await import(
    process.env.SOLUTIONS ? '../solutions/03-sort-by.js' : './03-sort-by.js'
);

const products = [
    { name: 'Lamp', price: 20, stock: 4 },
    { name: 'Pen', price: 3, stock: 120 },
    { name: 'Mug', price: 7, stock: 0 },
];

test('sorts by the number the callback gives', () => {
    const names = sortBy(products, (product) => product.price).map((p) => p.name);
    assert.deepEqual(names, ['Pen', 'Mug', 'Lamp']);
});

test('another callback gives another order', () => {
    const names = sortBy(products, (product) => product.stock).map((p) => p.name);
    assert.deepEqual(names, ['Mug', 'Lamp', 'Pen']);
});

test('the items array is not changed', () => {
    const result = sortBy(products, (product) => product.price);
    assert.deepEqual(products.map((p) => p.name), ['Lamp', 'Pen', 'Mug']);
    assert.notEqual(result, products);
});

test('returns the same item objects, not copies', () => {
    const result = sortBy(products, (product) => product.price);
    assert.equal(result[0], products[1]);
});

test('an empty array gives an empty array', () => {
    assert.deepEqual(sortBy([], (item) => item.price), []);
});
