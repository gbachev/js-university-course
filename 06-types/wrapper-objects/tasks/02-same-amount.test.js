import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { isSameAmount } = await import(
    process.env.SOLUTIONS ? '../solutions/02-same-amount.js' : './02-same-amount.js'
);

test('two wrapper objects with the same value are the same amount', () => {
    assert.equal(isSameAmount(new Number(50), new Number(50)), true);
});

test('a number and a wrapper object with the same value are the same amount', () => {
    assert.equal(isSameAmount(50, new Number(50)), true);
    assert.equal(isSameAmount(new Number(50), 50), true);
});

test('two plain numbers with the same value are the same amount', () => {
    assert.equal(isSameAmount(50, 50), true);
});

test('different amounts are not the same amount', () => {
    assert.equal(isSameAmount(new Number(50), new Number(45)), false);
    assert.equal(isSameAmount(50, 45), false);
});

test('a number and a string are not the same amount', () => {
    assert.equal(isSameAmount(50, '50'), false);
});
