import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { averageRating } = await import(
    process.env.SOLUTIONS ? '../solutions/01-average-rating.js' : './01-average-rating.js'
);

test('the average of 3, 4 and 5 is 4', () => {
    assert.equal(averageRating(3, 4, 5), 4);
});

test('three equal ratings give that rating', () => {
    assert.equal(averageRating(5, 5, 5), 5);
});

test('the order of the ratings does not matter', () => {
    assert.equal(averageRating(1, 2, 3), 2);
    assert.equal(averageRating(3, 2, 1), 2);
});
