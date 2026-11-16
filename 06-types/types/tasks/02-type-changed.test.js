import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { typeChanged } = await import(
    process.env.SOLUTIONS ? '../solutions/02-type-changed.js' : './02-type-changed.js'
);

test('a string that becomes a number changed its type', () => {
    assert.equal(typeChanged('JavaScript', 6), true);
});

test('two different numbers are still of the same type', () => {
    assert.equal(typeChanged(5, 10), false);
});

test('two different strings are still of the same type', () => {
    assert.equal(typeChanged('dark', 'light'), false);
});

test('a number and the same number as a string are of different types', () => {
    assert.equal(typeChanged(6, '6'), true);
});

test('a boolean that becomes a string changed its type', () => {
    assert.equal(typeChanged(true, 'true'), true);
});
