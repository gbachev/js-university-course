import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { toCodeCharacters } = await import(
    process.env.SOLUTIONS ? '../solutions/03-coupon-characters.js' : './03-coupon-characters.js'
);

test('a lower case code becomes uppercase characters', () => {
    assert.deepEqual(toCodeCharacters('save10'), ['S', 'A', 'V', 'E', '1', '0']);
});

test('a code in mixed case gives uppercase characters', () => {
    assert.deepEqual(toCodeCharacters('WinTer'), ['W', 'I', 'N', 'T', 'E', 'R']);
});

test('digits stay as they are', () => {
    assert.deepEqual(toCodeCharacters('2026'), ['2', '0', '2', '6']);
});

test('an empty code gives an empty array', () => {
    assert.deepEqual(toCodeCharacters(''), []);
});
