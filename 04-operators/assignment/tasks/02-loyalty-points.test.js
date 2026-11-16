import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { addPoints } = await import(
    process.env.SOLUTIONS ? '../solutions/02-loyalty-points.js' : './02-loyalty-points.js'
);

test('a new customer gets 2 points for every euro', () => {
    assert.equal(addPoints(0, 15), 30);
});

test('the new points are added to the points the customer already has', () => {
    assert.equal(addPoints(100, 20), 140);
});

test('spending nothing keeps the points as they are', () => {
    assert.equal(addPoints(250, 0), 250);
});
