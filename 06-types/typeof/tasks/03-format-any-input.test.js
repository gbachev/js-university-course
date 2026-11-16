import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { formatInput } = await import(
    process.env.SOLUTIONS
        ? '../solutions/03-format-any-input.js'
        : './03-format-any-input.js'
);

test('a string loses the spaces around it', () => {
    assert.equal(formatInput('  Ada '), 'Ada');
});

test('a number gets 2 decimal places', () => {
    assert.equal(formatInput(5), '5.00');
    assert.equal(formatInput(19.999), '20.00');
});

test('null and undefined become an empty string', () => {
    assert.equal(formatInput(null), '');
    assert.equal(formatInput(undefined), '');
});

test('a boolean becomes an empty string', () => {
    assert.equal(formatInput(true), '');
});
