import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { Product } = await import(
    process.env.SOLUTIONS
        ? '../solutions/02-product-constructor.js'
        : './02-product-constructor.js'
);

test('new Product sets the name and the price', () => {
    const hat = new Product('Hat', 15);
    assert.equal(hat.name, 'Hat');
    assert.equal(hat.price, 15);
});

test('a new product is in stock', () => {
    assert.equal(new Product('Hat', 15).inStock, true);
});

test('the product has exactly these three properties', () => {
    const scarf = new Product('Scarf', 22);
    assert.equal(Object.keys(scarf).length, 3);
    assert.equal(scarf.hasOwnProperty('name'), true);
    assert.equal(scarf.hasOwnProperty('price'), true);
    assert.equal(scarf.hasOwnProperty('inStock'), true);
});

test('every product is its own object', () => {
    const hat = new Product('Hat', 15);
    const scarf = new Product('Scarf', 22);
    hat.inStock = false;
    assert.equal(scarf.inStock, true);
    assert.equal(scarf.name, 'Scarf');
});
