import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { isValidCoupon } = await import(
    process.env.SOLUTIONS ? '../solutions/01-valid-coupon.js' : './01-valid-coupon.js'
);

test('capital letters followed by two digits are a valid code', () => {
    assert.equal(isValidCoupon('SPRING26'), true);
    assert.equal(isValidCoupon('VIP10'), true);
});

test('the same valid code checked twice in a row is valid both times', () => {
    assert.equal(isValidCoupon('WELCOME15'), true);
    assert.equal(isValidCoupon('WELCOME15'), true);
});

test('extra text before or after the code is not valid', () => {
    assert.equal(isValidCoupon('Use SPRING26'), false);
    assert.equal(isValidCoupon('SPRING26!'), false);
    assert.equal(isValidCoupon('SPRING26 '), false);
});

test('more or fewer than two digits is not valid', () => {
    assert.equal(isValidCoupon('SPRING2026'), false);
    assert.equal(isValidCoupon('SPRING2'), false);
});

test('a code without letters or in lowercase is not valid', () => {
    assert.equal(isValidCoupon('26'), false);
    assert.equal(isValidCoupon('spring26'), false);
});
