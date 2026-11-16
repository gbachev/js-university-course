import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { formatGuests } = await import(
    process.env.SOLUTIONS ? '../solutions/03-guest-list.js' : './03-guest-list.js'
);

test('three guests get commas and an "and" before the last name', () => {
    assert.equal(formatGuests(['Anna', 'Ben', 'Carl']), 'Anna, Ben and Carl');
});

test('four guests get commas between the first three names', () => {
    assert.equal(formatGuests(['Anna', 'Ben', 'Carl', 'Dana']), 'Anna, Ben, Carl and Dana');
});

test('two guests are joined with "and" only', () => {
    assert.equal(formatGuests(['Anna', 'Ben']), 'Anna and Ben');
});

test('one guest is only their name', () => {
    assert.equal(formatGuests(['Anna']), 'Anna');
});

test('no guests give an empty string', () => {
    assert.equal(formatGuests([]), '');
});

test('the guests array does not change', () => {
    const guests = ['Anna', 'Ben', 'Carl'];
    formatGuests(guests);
    assert.deepEqual(guests, ['Anna', 'Ben', 'Carl']);
});
