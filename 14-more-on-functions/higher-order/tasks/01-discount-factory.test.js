import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { discountOf } = await import(
    process.env.SOLUTIONS ? '../solutions/01-discount-factory.js' : './01-discount-factory.js'
);

test('returns a function', () => {
    assert.equal(typeof discountOf(10), 'function');
});

test('the returned function takes the discount off the price', () => {
    const memberPrice = discountOf(10);
    assert.equal(memberPrice(50), 45);
    assert.equal(memberPrice(200), 180);
});

test('works as a map callback', () => {
    assert.deepEqual([100, 20].map(discountOf(25)), [75, 15]);
});

test('each function remembers its own percent', () => {
    const member = discountOf(10);
    const blackFriday = discountOf(50);
    assert.equal(member(100), 90);
    assert.equal(blackFriday(100), 50);
    assert.equal(member(100), 90);
});

test('a discount of 0 keeps the price', () => {
    assert.equal(discountOf(0)(30), 30);
});
