import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { findCheapest } = await import(
    process.env.SOLUTIONS ? '../solutions/03-cheapest-product.js' : './03-cheapest-product.js'
);

test('we get the name and the price of the cheapest product', () => {
    const products = [
        { name: 'Laptop', price: 1299 },
        { name: 'Mouse', price: 25 },
        { name: 'Keyboard', price: 79 },
    ];

    assert.deepEqual(findCheapest(products), { name: 'Mouse', price: 25 });
});

test('the cheapest product can be the first one', () => {
    const products = [
        { name: 'Cable', price: 9 },
        { name: 'Monitor', price: 249 },
    ];

    assert.deepEqual(findCheapest(products), { name: 'Cable', price: 9 });
});

test('a list with one product gives that product', () => {
    assert.deepEqual(findCheapest([{ name: 'Webcam', price: 59 }]), {
        name: 'Webcam',
        price: 59,
    });
});

test('an empty list gives null', () => {
    assert.equal(findCheapest([]), null);
});

test('the other properties of the product are not in the result', () => {
    const products = [{ id: 3, name: 'Headset', price: 45, inStock: true }];

    assert.deepEqual(findCheapest(products), { name: 'Headset', price: 45 });
});
