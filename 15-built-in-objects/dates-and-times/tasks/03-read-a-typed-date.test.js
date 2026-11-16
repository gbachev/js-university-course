import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { parseTypedDate } = await import(
    process.env.SOLUTIONS
        ? '../solutions/03-read-a-typed-date.js'
        : './03-read-a-typed-date.js'
);

test('01.03.2026 is March 1 at local midnight', () => {
    const date = parseTypedDate('01.03.2026');
    assert.ok(date instanceof Date);
    assert.equal(date.getTime(), new Date(2026, 2, 1).getTime());
});

test('the last day of the year is read correctly', () => {
    const date = parseTypedDate('31.12.2026');
    assert.equal(date.getTime(), new Date(2026, 11, 31).getTime());
});

test('29 February works in a leap year', () => {
    assert.equal(parseTypedDate('29.02.2028').getTime(), new Date(2028, 1, 29).getTime());
});

test('a day that rolls over into the next month is not valid', () => {
    assert.equal(parseTypedDate('31.02.2026'), null);
    assert.equal(parseTypedDate('29.02.2026'), null);
});

test('a month 13 is not valid', () => {
    assert.equal(parseTypedDate('15.13.2026'), null);
});

test('text that is not DD.MM.YYYY gives null', () => {
    assert.equal(parseTypedDate('2026-03-01'), null);
    assert.equal(parseTypedDate('01.03'), null);
    assert.equal(parseTypedDate('aa.bb.cccc'), null);
});
