// The DST test needs a zone that switches on 29 March, so we pin it before the import.
process.env.TZ = 'Europe/Sofia';

import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { addDays } = await import(
    process.env.SOLUTIONS ? '../solutions/01-add-days.js' : './01-add-days.js'
);

// The local calendar parts (year, month, day, hours) in Europe/Sofia.
function parts(date) {
    return [date.getFullYear(), date.getMonth(), date.getDate(), date.getHours()];
}

test('10 days after January 25 is February 4', () => {
    assert.deepEqual(parts(addDays(new Date(2026, 0, 25), 10)), [2026, 1, 4, 0]);
});

test('the days roll over into the next year', () => {
    assert.deepEqual(parts(addDays(new Date(2026, 11, 30), 3)), [2027, 0, 2, 0]);
});

test('a negative number of days goes back', () => {
    assert.deepEqual(parts(addDays(new Date(2026, 2, 1), -1)), [2026, 1, 28, 0]);
});

test('the time of day stays the same across the DST switch', () => {
    assert.deepEqual(parts(addDays(new Date(2026, 2, 28, 12), 1)), [2026, 2, 29, 12]);
});

test('the result is a new Date and the original does not change', () => {
    const orderedAt = new Date(2026, 0, 25);
    const dueAt = addDays(orderedAt, 10);
    assert.ok(dueAt instanceof Date);
    assert.notEqual(dueAt, orderedAt);
    assert.deepEqual(parts(orderedAt), [2026, 0, 25, 0]);
});
