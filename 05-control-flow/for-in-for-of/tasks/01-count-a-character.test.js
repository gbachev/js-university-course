import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { countCharacter } = await import(
    process.env.SOLUTIONS
        ? '../solutions/01-count-a-character.js'
        : './01-count-a-character.js'
);

test('counts every exclamation mark in a review', () => {
    assert.equal(countCharacter('Great shop! Fast delivery!', '!'), 2);
});

test('counts a letter that appears several times', () => {
    assert.equal(countCharacter('Banana', 'a'), 3);
});

test('a capital letter is a different character', () => {
    assert.equal(countCharacter('Banana', 'B'), 1);
    assert.equal(countCharacter('Banana', 'b'), 0);
});

test('a character that is not in the message counts 0', () => {
    assert.equal(countCharacter('Thank you', '!'), 0);
});

test('an empty message counts 0', () => {
    assert.equal(countCharacter('', '!'), 0);
});
