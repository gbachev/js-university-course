import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { readDiscount } = await import(
    process.env.SOLUTIONS ? '../solutions/03-only-what-we-expect.js' : './03-only-what-we-expect.js'
);

test('a saved coupon gives its percent', () => {
    assert.equal(readDiscount('{"coupon":{"percent":15}}'), 15);
});

test('broken JSON gives no discount', () => {
    assert.equal(readDiscount('{broken'), 0);
});

test('a missing coupon object is a bug and the TypeError reaches the caller', () => {
    assert.throws(() => readDiscount('{"percent":15}'), TypeError);
});

test('null saved as JSON is rethrown as well', () => {
    assert.throws(() => readDiscount('null'), TypeError);
});
