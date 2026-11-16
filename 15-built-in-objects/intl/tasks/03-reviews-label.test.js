import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { reviewsLabel } = await import(
    process.env.SOLUTIONS ? '../solutions/03-reviews-label.js' : './03-reviews-label.js'
);

test('no reviews has its own text', () => {
    assert.equal(reviewsLabel(0), 'No reviews yet');
});

test('one review uses the singular', () => {
    assert.equal(reviewsLabel(1), '1 review');
});

test('more than one review uses the plural', () => {
    assert.equal(reviewsLabel(2), '2 reviews');
    assert.equal(reviewsLabel(21), '21 reviews');
});

test('a big count gets a thousands separator', () => {
    assert.equal(reviewsLabel(1250), '1,250 reviews');
    assert.equal(reviewsLabel(1000001), '1,000,001 reviews');
});
