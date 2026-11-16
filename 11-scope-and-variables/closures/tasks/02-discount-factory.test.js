import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { createDiscount } = await import(
    process.env.SOLUTIONS
        ? '../solutions/02-discount-factory.js'
        : './02-discount-factory.js'
);

test('a 10% discount takes 5 off a price of 50', () => {
    const tenOff = createDiscount(10);
    assert.equal(tenOff(50), 45);
});

test('the same discount works for many prices', () => {
    const tenOff = createDiscount(10);
    assert.equal(tenOff(100), 90);
    assert.equal(tenOff(20), 18);
});

test('two discounts keep their own percent', () => {
    const tenOff = createDiscount(10);
    const quarterOff = createDiscount(25);
    assert.equal(tenOff(80), 72);
    assert.equal(quarterOff(80), 60);
});

test('the result is rounded to 2 decimal places', () => {
    assert.equal(createDiscount(25)(19.99), 14.99);
    assert.equal(createDiscount(15)(9.99), 8.49);
});

test('a discount of 0 keeps the price', () => {
    assert.equal(createDiscount(0)(12.5), 12.5);
});
