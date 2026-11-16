import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { withDiscount } = await import(
    process.env.SOLUTIONS ? '../solutions/03-discount-copy.js' : './03-discount-copy.js'
);

test('returns the product with the discounted price', () => {
    assert.deepEqual(withDiscount({ name: 'T-shirt', price: 50 }, 20), {
        name: 'T-shirt',
        price: 40,
    });
});

test('the original product keeps its price', () => {
    const shirt = { name: 'T-shirt', price: 50 };
    withDiscount(shirt, 20);
    assert.deepEqual(shirt, { name: 'T-shirt', price: 50 });
});

test('returns a different object, not the one we passed in', () => {
    const shirt = { name: 'T-shirt', price: 50 };
    assert.notEqual(withDiscount(shirt, 20), shirt);
});

test('a 0% discount keeps the price', () => {
    assert.deepEqual(withDiscount({ name: 'Socks', price: 8 }, 0), {
        name: 'Socks',
        price: 8,
    });
});
