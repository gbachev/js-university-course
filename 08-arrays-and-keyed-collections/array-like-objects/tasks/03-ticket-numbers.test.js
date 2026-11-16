import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { createTickets } = await import(
    process.env.SOLUTIONS ? '../solutions/03-ticket-numbers.js' : './03-ticket-numbers.js'
);

test('three tickets are numbered from 1 to 3', () => {
    assert.deepEqual(createTickets(3, 'HD'), ['HD-1', 'HD-2', 'HD-3']);
});

test('the prefix is used for every ticket', () => {
    assert.deepEqual(createTickets(2, 'IT'), ['IT-1', 'IT-2']);
});

test('the number of tickets is the count we ask for', () => {
    const tickets = createTickets(12, 'HD');
    assert.equal(tickets.length, 12);
    assert.equal(tickets[11], 'HD-12');
});

test('a count of 0 gives no tickets', () => {
    assert.deepEqual(createTickets(0, 'HD'), []);
});
