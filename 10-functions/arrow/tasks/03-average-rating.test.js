import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { averageRating } = await import(
    process.env.SOLUTIONS ? '../solutions/03-average-rating.js' : './03-average-rating.js'
);

test('a call does not throw', () => {
    assert.doesNotThrow(() => averageRating(5, 4));
});

test('the average is rounded to 1 decimal place', () => {
    assert.equal(averageRating(5, 4, 4), 4.3);
});

test('one rating is its own average', () => {
    assert.equal(averageRating(3), 3);
});

test('a whole average stays whole', () => {
    assert.equal(averageRating(5, 3, 4, 4), 4);
});

test('no ratings give an average of 0', () => {
    assert.equal(averageRating(), 0);
});
