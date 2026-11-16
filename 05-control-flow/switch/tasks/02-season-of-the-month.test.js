import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { getSeason } = await import(
    process.env.SOLUTIONS
        ? '../solutions/02-season-of-the-month.js'
        : './02-season-of-the-month.js'
);

test('December, January and February are winter', () => {
    assert.equal(getSeason(12), 'winter');
    assert.equal(getSeason(1), 'winter');
    assert.equal(getSeason(2), 'winter');
});

test('March to May are spring', () => {
    assert.equal(getSeason(3), 'spring');
    assert.equal(getSeason(4), 'spring');
    assert.equal(getSeason(5), 'spring');
});

test('June to August are summer', () => {
    assert.equal(getSeason(6), 'summer');
    assert.equal(getSeason(7), 'summer');
    assert.equal(getSeason(8), 'summer');
});

test('September to November are autumn', () => {
    assert.equal(getSeason(9), 'autumn');
    assert.equal(getSeason(10), 'autumn');
    assert.equal(getSeason(11), 'autumn');
});

test('a number outside 1 to 12 is an invalid month', () => {
    assert.equal(getSeason(0), 'invalid month');
    assert.equal(getSeason(13), 'invalid month');
});

test('a month written as a string is an invalid month', () => {
    assert.equal(getSeason('3'), 'invalid month');
});
