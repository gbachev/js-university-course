import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { countFreeSeats } = await import(
    process.env.SOLUTIONS ? '../solutions/03-free-seats.js' : './03-free-seats.js'
);

test('counts the free seats in every row', () => {
    assert.equal(countFreeSeats([[true, false], [false, false, true]]), 3);
});

test('a full hall has no free seats', () => {
    assert.equal(countFreeSeats([[true, true], [true, true]]), 0);
});

test('an empty hall has no free seats', () => {
    assert.equal(countFreeSeats([]), 0);
});

test('a hall nobody booked is all free', () => {
    assert.equal(countFreeSeats([[false, false, false], [false], [false, false]]), 6);
});
