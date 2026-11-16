import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { fieldState } = await import(
    process.env.SOLUTIONS
        ? '../solutions/03-empty-or-not-set.js'
        : './03-empty-or-not-set.js'
);

test('undefined means the field was never set', () => {
    assert.equal(fieldState(undefined), 'not set');
});

test('null means the field was cleared', () => {
    assert.equal(fieldState(null), 'cleared');
});

test('a nickname means the field is filled', () => {
    assert.equal(fieldState('jsfan'), 'filled');
});

test('an empty string is neither null nor undefined, so the field is filled', () => {
    assert.equal(fieldState(''), 'filled');
});
