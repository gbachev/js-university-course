import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
// The default import of a CommonJS file is its module.exports.
const { default: coupons } = await import(
    process.env.SOLUTIONS ? '../solutions/01-coupons.cjs' : './01-coupons.cjs'
);

test('the module exports findCoupon and applyCoupon', () => {
    assert.equal(typeof coupons.findCoupon, 'function');
    assert.equal(typeof coupons.applyCoupon, 'function');
});

test('a known code gives its discount rate', () => {
    assert.equal(coupons.findCoupon('HELLO10'), 0.1);
    assert.equal(coupons.findCoupon('STUDENT20'), 0.2);
});

test('an unknown code gives no discount', () => {
    assert.equal(coupons.findCoupon('FREE'), 0);
    assert.equal(coupons.applyCoupon(50, 'FREE'), 50);
});

test('applying a coupon lowers the price', () => {
    assert.equal(coupons.applyCoupon(50, 'HELLO10'), 45);
    assert.equal(coupons.applyCoupon(50, 'STUDENT20'), 40);
});

test('the list of codes stays private', () => {
    assert.deepEqual(Object.keys(coupons).sort(), ['applyCoupon', 'findCoupon']);
});
