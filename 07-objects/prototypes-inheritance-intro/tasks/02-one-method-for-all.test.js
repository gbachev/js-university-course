import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { Product } = await import(
    process.env.SOLUTIONS
        ? '../solutions/02-one-method-for-all.js'
        : './02-one-method-for-all.js'
);

test('describe returns the name and the price', () => {
    assert.equal(new Product('Hat', 15).describe(), 'Hat - 15 EUR');
});

test('describe uses the current price', () => {
    const scarf = new Product('Scarf', 22);
    scarf.price = 18;
    assert.equal(scarf.describe(), 'Scarf - 18 EUR');
});

test('a product has only name and price as own properties', () => {
    assert.deepEqual(Object.keys(new Product('Hat', 15)), ['name', 'price']);
});

test('all products share one describe function', () => {
    const hat = new Product('Hat', 15);
    const scarf = new Product('Scarf', 22);
    assert.equal(hat.describe, scarf.describe);
    assert.equal(hat.describe, Product.prototype.describe);
});
