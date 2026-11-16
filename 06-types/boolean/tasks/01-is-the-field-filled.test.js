import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { isFilled } = await import(
    process.env.SOLUTIONS
        ? '../solutions/01-is-the-field-filled.js'
        : './01-is-the-field-filled.js'
);

test('a name is filled in', () => {
    assert.equal(isFilled('Jane'), true);
});

test('an empty string is not filled in', () => {
    assert.equal(isFilled(''), false);
});

test('a missing value is not filled in', () => {
    assert.equal(isFilled(null), false);
    assert.equal(isFilled(undefined), false);
});

test('0, -0 and NaN are not filled in', () => {
    assert.equal(isFilled(0), false);
    assert.equal(isFilled(-0), false);
    assert.equal(isFilled(NaN), false);
});

test('the string false is not empty, so it is filled in', () => {
    assert.equal(isFilled('false'), true);
});

test('a number other than 0 is filled in', () => {
    assert.equal(isFilled(18), true);
});
