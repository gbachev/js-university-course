import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { isValidQuantity } = await import(
    process.env.SOLUTIONS ? '../solutions/03-valid-quantity.js' : './03-valid-quantity.js'
);

test('a whole number in the range is valid', () => {
    assert.equal(isValidQuantity(3), true);
});

test('1 and 99 are valid, 0 and 100 are not', () => {
    assert.equal(isValidQuantity(1), true);
    assert.equal(isValidQuantity(99), true);
    assert.equal(isValidQuantity(0), false);
    assert.equal(isValidQuantity(100), false);
});

test('a number with decimals is not valid', () => {
    assert.equal(isValidQuantity(2.5), false);
});

test('NaN and Infinity are not valid', () => {
    assert.equal(isValidQuantity(NaN), false);
    assert.equal(isValidQuantity(Infinity), false);
});

test('a number written as a string is not valid', () => {
    assert.equal(isValidQuantity('3'), false);
});
