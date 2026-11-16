import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { Coupon } = await import(
    process.env.SOLUTIONS
        ? '../solutions/03-coupon-factories.js'
        : './03-coupon-factories.js'
);

test('a percent coupon takes a share off the total', () => {
    assert.equal(Coupon.percent(10).apply(50), 45);
    assert.equal(Coupon.percent(25).apply(80), 60);
});

test('a fixed coupon takes an amount off the total', () => {
    assert.equal(Coupon.fixed(5).apply(20), 15);
});

test('the total never goes below 0', () => {
    assert.equal(Coupon.fixed(5).apply(3), 0);
    assert.equal(Coupon.percent(150).apply(40), 0);
});

test('the factories create coupons', () => {
    const coupon = Coupon.percent(10);
    assert.equal(coupon instanceof Coupon, true);
    assert.equal(typeof coupon.percent, 'undefined');
});

test('the kind and the value stay private', () => {
    assert.deepEqual(Object.keys(Coupon.fixed(5)), []);
    assert.equal(JSON.stringify(Coupon.fixed(5)), '{}');
});

test('isCoupon knows the coupons the class built', () => {
    const fake = { apply: () => 0 };
    assert.equal(Coupon.isCoupon(Coupon.fixed(5)), true);
    assert.equal(Coupon.isCoupon(fake), false);
    assert.equal(Coupon.isCoupon(Object.create(Coupon.prototype)), false);
});
