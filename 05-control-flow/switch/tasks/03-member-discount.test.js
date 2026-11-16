import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { getDiscountPercent } = await import(
    process.env.SOLUTIONS
        ? '../solutions/03-member-discount.js'
        : './03-member-discount.js'
);

test('a gold member gets 20 percent', () => {
    assert.equal(getDiscountPercent('gold'), 20);
});

test('a silver member gets 10 percent', () => {
    assert.equal(getDiscountPercent('silver'), 10);
});

test('a bronze member gets 5 percent', () => {
    assert.equal(getDiscountPercent('bronze'), 5);
});

test('a guest gets no discount', () => {
    assert.equal(getDiscountPercent('guest'), 0);
});
