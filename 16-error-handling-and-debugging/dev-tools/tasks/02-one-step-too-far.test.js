import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { averageRating } = await import(
    process.env.SOLUTIONS ? '../solutions/02-one-step-too-far.js' : './02-one-step-too-far.js'
);

test('the average of three reviews', () => {
    assert.equal(averageRating([{ stars: 4 }, { stars: 5 }, { stars: 3 }]), 4);
});

test('a single review is its own average', () => {
    assert.equal(averageRating([{ stars: 2 }]), 2);
});

test('the average can have decimals', () => {
    assert.equal(averageRating([{ stars: 5 }, { stars: 4 }]), 4.5);
});

test('no reviews yet gives 0', () => {
    assert.equal(averageRating([]), 0);
});
