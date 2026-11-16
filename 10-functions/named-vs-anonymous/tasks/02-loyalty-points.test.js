import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { loyaltyPoints } = await import(
    process.env.SOLUTIONS ? '../solutions/02-loyalty-points.js' : './02-loyalty-points.js'
);

test('a call does not throw', () => {
    assert.doesNotThrow(() => loyaltyPoints(3));
});

test('the points of every day are added up', () => {
    assert.equal(loyaltyPoints(3), 6);
    assert.equal(loyaltyPoints(10), 55);
});

test('one day gives one point', () => {
    assert.equal(loyaltyPoints(1), 1);
});

test('0 days give 0 points', () => {
    assert.equal(loyaltyPoints(0), 0);
});
