import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { getTicketPrice } = await import(
    process.env.SOLUTIONS ? '../solutions/03-cinema-ticket.js' : './03-cinema-ticket.js'
);

test('a child under 12 pays 5', () => {
    assert.equal(getTicketPrice(10, false), 5);
    assert.equal(getTicketPrice(11, true), 5);
});

test('a teenager from 12 to 17 pays 8', () => {
    assert.equal(getTicketPrice(12, false), 8);
    assert.equal(getTicketPrice(17, true), 8);
});

test('an adult pays 12, or 9 as a student', () => {
    assert.equal(getTicketPrice(30, false), 12);
    assert.equal(getTicketPrice(30, true), 9);
});

test('an 18 year old is already an adult', () => {
    assert.equal(getTicketPrice(18, false), 12);
    assert.equal(getTicketPrice(18, true), 9);
});

test('a senior of 65 and above pays 6, student or not', () => {
    assert.equal(getTicketPrice(65, false), 6);
    assert.equal(getTicketPrice(70, true), 6);
});

test('a 64 year old still pays the adult price', () => {
    assert.equal(getTicketPrice(64, false), 12);
});
