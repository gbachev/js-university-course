import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { createSeatRow } = await import(
    process.env.SOLUTIONS ? '../solutions/01-seat-row.js' : './01-seat-row.js'
);

test('a row of three seats has three free seats', () => {
    assert.deepEqual(createSeatRow(3), ['free', 'free', 'free']);
});

test('a row of one seat has one free seat', () => {
    assert.deepEqual(createSeatRow(1), ['free']);
});

test('every seat holds a value, with no empty slots', () => {
    const row = createSeatRow(10);
    assert.equal(row.length, 10);
    assert.equal(row.includes(undefined), false);
});

test('a row of 0 seats is an empty array', () => {
    assert.deepEqual(createSeatRow(0), []);
});
