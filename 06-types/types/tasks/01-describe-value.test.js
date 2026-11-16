import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { describeValue } = await import(
    process.env.SOLUTIONS ? '../solutions/01-describe-value.js' : './01-describe-value.js'
);

test('a number is described as a number', () => {
    assert.equal(describeValue(6), '6 is a number');
});

test('a string is described as a string', () => {
    assert.equal(describeValue('JavaScript'), 'JavaScript is a string');
});

test('a boolean is described as a boolean', () => {
    assert.equal(describeValue(true), 'true is a boolean');
});

test('a number written as a string is still a string', () => {
    assert.equal(describeValue('6'), '6 is a string');
});

test('a decimal number is described as a number', () => {
    assert.equal(describeValue(3.14), '3.14 is a number');
});
