import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { describeValue } = await import(
    process.env.SOLUTIONS
        ? '../solutions/01-describe-a-value.js'
        : './01-describe-a-value.js'
);

test('primitives are described by typeof', () => {
    assert.equal(describeValue('Anna'), 'string');
    assert.equal(describeValue(42), 'number');
    assert.equal(describeValue(true), 'boolean');
    assert.equal(describeValue(undefined), 'undefined');
});

test('null is null, not object', () => {
    assert.equal(describeValue(null), 'null');
});

test('an array is array', () => {
    assert.equal(describeValue(['a', 'b']), 'array');
    assert.equal(describeValue([]), 'array');
});

test('a date is date', () => {
    assert.equal(describeValue(new Date('2026-11-16')), 'date');
});

test('a plain object is object and a function is function', () => {
    assert.equal(describeValue({ id: 1 }), 'object');
    assert.equal(describeValue(function () {}), 'function');
});
