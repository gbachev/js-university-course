import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { parseAge } = await import(
    process.env.SOLUTIONS ? '../solutions/01-read-the-age.js' : './01-read-the-age.js'
);

test('a number in a string becomes a number', () => {
    assert.equal(parseAge('34'), 34);
});

test('spaces around the number are fine', () => {
    assert.equal(parseAge(' 34 '), 34);
});

test('text that is not a number gives null', () => {
    assert.equal(parseAge('twenty'), null);
    assert.equal(parseAge('34 years'), null);
});

test('an empty field gives null, not 0', () => {
    assert.equal(parseAge(''), null);
});

test('a field with only spaces gives null, not 0', () => {
    assert.equal(parseAge('   '), null);
});
