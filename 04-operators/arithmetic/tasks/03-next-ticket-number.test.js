import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { nextTicketNumber } = await import(
    process.env.SOLUTIONS ? '../solutions/03-next-ticket-number.js' : './03-next-ticket-number.js'
);

test('the ticket after 41 is 42', () => {
    assert.equal(nextTicketNumber(41), 42);
});

test('the first ticket of the day is 1', () => {
    assert.equal(nextTicketNumber(0), 1);
});

test('the number always grows by exactly one', () => {
    assert.equal(nextTicketNumber(999), 1000);
});
