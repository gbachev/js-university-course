import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { getGuest } = await import(
    process.env.SOLUTIONS ? '../solutions/01-seat-in-hall.js' : './01-seat-in-hall.js'
);

const hall = [
    ['Anna', 'Ben'],
    ['Carl', 'Dana', 'Eva'],
];

test('the guest at a row and a seat', () => {
    assert.equal(getGuest(hall, 1, 2), 'Eva');
    assert.equal(getGuest(hall, 0, 0), 'Anna');
});

test('a seat past the end of a short row gives undefined', () => {
    assert.equal(getGuest(hall, 0, 2), undefined);
});

test('a row that does not exist gives undefined instead of an error', () => {
    assert.equal(getGuest(hall, 5, 0), undefined);
});

test('an empty hall gives undefined', () => {
    assert.equal(getGuest([], 0, 0), undefined);
});
