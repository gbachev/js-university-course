import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { findUser } = await import(
    process.env.SOLUTIONS ? '../solutions/01-find-user.js' : './01-find-user.js'
);

const users = [
    { name: 'Anna', email: 'anna@example.com' },
    { name: 'Ben', email: 'ben@example.com' },
    { name: 'Ben Junior', email: 'ben@example.com' },
];

test('the user with the matching email is found', () => {
    assert.equal(findUser(users, 'anna@example.com'), users[0]);
});

test('when two users share an email, the first one is found', () => {
    assert.equal(findUser(users, 'ben@example.com').name, 'Ben');
});

test('an email nobody has gives undefined', () => {
    assert.equal(findUser(users, 'nobody@example.com'), undefined);
});

test('an empty list of users gives undefined', () => {
    assert.equal(findUser([], 'anna@example.com'), undefined);
});
