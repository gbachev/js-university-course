import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { isSameScore } = await import(
    process.env.SOLUTIONS ? '../solutions/01-strict-or-loose.js' : './01-strict-or-loose.js'
);

test('the same number is the same score', () => {
    assert.equal(isSameScore(10, 10), true);
});

test('two different numbers are not the same score', () => {
    assert.equal(isSameScore(10, 12), false);
});

test('a number and the same number as a string are not the same score', () => {
    assert.equal(isSameScore(10, '10'), false);
    assert.equal(isSameScore('10', 10), false);
});

test('zero and an empty string are not the same score', () => {
    assert.equal(isSameScore(0, ''), false);
});
