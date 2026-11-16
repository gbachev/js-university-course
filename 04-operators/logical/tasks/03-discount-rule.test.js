import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { getsDiscount } = await import(
    process.env.SOLUTIONS ? '../solutions/03-discount-rule.js' : './03-discount-rule.js'
);

test('a member with a total of 100 or more gets the discount', () => {
    assert.equal(getsDiscount(true, 150, false), true);
    assert.equal(getsDiscount(true, 100, false), true);
});

test('a member with a coupon gets the discount on a small total', () => {
    assert.equal(getsDiscount(true, 40, true), true);
});

test('a member with a small total and no coupon does not get the discount', () => {
    assert.equal(getsDiscount(true, 40, false), false);
});

test('a customer who is not a member does not get the discount with a coupon', () => {
    assert.equal(getsDiscount(false, 40, true), false);
});

test('a customer who is not a member does not get the discount on a big total', () => {
    assert.equal(getsDiscount(false, 150, false), false);
});
