import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { checkQuantity } = await import(
    process.env.SOLUTIONS ? '../solutions/02-check-the-quantity.js' : './02-check-the-quantity.js'
);

test('a quantity in range is returned', () => {
    assert.equal(checkQuantity(3), 3);
});

test('1 and 99 are fine', () => {
    assert.equal(checkQuantity(1), 1);
    assert.equal(checkQuantity(99), 99);
});

test('a number in a string throws a TypeError', () => {
    assert.throws(() => checkQuantity('3'), {
        name: 'TypeError',
        message: 'quantity must be a number, got string'
    });
});

test('a missing quantity throws a TypeError', () => {
    assert.throws(() => checkQuantity(undefined), {
        name: 'TypeError',
        message: 'quantity must be a number, got undefined'
    });
});

test('0 throws a RangeError', () => {
    assert.throws(() => checkQuantity(0), {
        name: 'RangeError',
        message: 'quantity must be 1-99, got 0'
    });
});

test('100 throws a RangeError', () => {
    assert.throws(() => checkQuantity(100), {
        name: 'RangeError',
        message: 'quantity must be 1-99, got 100'
    });
});
