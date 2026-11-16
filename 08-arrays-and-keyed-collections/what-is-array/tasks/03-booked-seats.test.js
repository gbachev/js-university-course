import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { countBookedSeats } = await import(
    process.env.SOLUTIONS ? '../solutions/03-booked-seats.js' : './03-booked-seats.js'
);

test('a row with no empty slots counts every seat', () => {
    assert.equal(countBookedSeats(['Anna', 'Ben', 'Carl']), 3);
});

test('the empty slots are not booked seats', () => {
    assert.equal(countBookedSeats([, , 'Anna', , 'Ben']), 2);
});

test('a seat booked by index on an empty row counts once', () => {
    const row = [];
    row[5] = 'Dana';
    assert.equal(countBookedSeats(row), 1);
});

test('an empty row has no booked seats', () => {
    assert.equal(countBookedSeats([]), 0);
});
