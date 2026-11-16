import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { isCouponValid } = await import(
    process.env.SOLUTIONS ? '../solutions/03-coupon-still-valid.js' : './03-coupon-still-valid.js'
);

test('a coupon is valid before its last day', () => {
    assert.equal(isCouponValid('2026-11-16', '2026-11-30'), true);
});

test('a coupon is still valid on its last day', () => {
    assert.equal(isCouponValid('2026-11-30', '2026-11-30'), true);
});

test('a coupon is not valid the day after its last day', () => {
    assert.equal(isCouponValid('2026-12-01', '2026-11-30'), false);
});

test('the end of one month comes before the start of the next', () => {
    assert.equal(isCouponValid('2026-10-31', '2026-11-01'), true);
});

test('a coupon from last year has expired', () => {
    assert.equal(isCouponValid('2027-01-02', '2026-12-31'), false);
});
