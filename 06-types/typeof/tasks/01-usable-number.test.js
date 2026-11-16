import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { isUsableNumber } = await import(
    process.env.SOLUTIONS ? '../solutions/01-usable-number.js' : './01-usable-number.js'
);

test('whole numbers and decimals are usable', () => {
    assert.equal(isUsableNumber(5), true);
    assert.equal(isUsableNumber(19.99), true);
    assert.equal(isUsableNumber(0), true);
});

test('NaN is not usable, even though typeof says number', () => {
    assert.equal(isUsableNumber(NaN), false);
});

test('a number in a string is not usable', () => {
    assert.equal(isUsableNumber('5'), false);
});

test('a Number wrapper object is not a primitive number', () => {
    assert.equal(isUsableNumber(new Number(5)), false);
});

test('null and undefined are not usable', () => {
    assert.equal(isUsableNumber(null), false);
    assert.equal(isUsableNumber(undefined), false);
});
