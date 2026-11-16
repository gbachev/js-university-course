import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { sortByPrice } = await import(
    process.env.SOLUTIONS ? '../solutions/03-sort-by-price.js' : './03-sort-by-price.js'
);

function names(products) {
    return products.map(product => product.name);
}

const products = [
    { name: 'Desk', price: 120 },
    { name: 'Lamp', price: 25 },
    { name: 'Chair', price: 60 },
];

test('the products go from the cheapest to the most expensive', () => {
    assert.deepEqual(names(sortByPrice(products)), ['Lamp', 'Chair', 'Desk']);
});

test('prices compare as numbers, so 9 comes before 10', () => {
    const cheap = [
        { name: 'Pen', price: 10 },
        { name: 'Clip', price: 9 },
        { name: 'Pad', price: 100 },
    ];
    assert.deepEqual(names(sortByPrice(cheap)), ['Clip', 'Pen', 'Pad']);
});

test('products with the same price keep their order', () => {
    const same = [
        { name: 'Red mug', price: 8 },
        { name: 'Tea', price: 5 },
        { name: 'Blue mug', price: 8 },
    ];
    assert.deepEqual(names(sortByPrice(same)), ['Tea', 'Red mug', 'Blue mug']);
});

test('the products array keeps its order', () => {
    sortByPrice(products);
    assert.deepEqual(names(products), ['Desk', 'Lamp', 'Chair']);
});

test('an empty list gives an empty list', () => {
    assert.deepEqual(sortByPrice([]), []);
});
