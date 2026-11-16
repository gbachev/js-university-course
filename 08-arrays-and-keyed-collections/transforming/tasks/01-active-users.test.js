import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { getActiveNames } = await import(
    process.env.SOLUTIONS ? '../solutions/01-active-users.js' : './01-active-users.js'
);

const users = [
    { name: 'Anna', active: true },
    { name: 'Ben', active: false },
    { name: 'Carl', active: true },
];

test('only the names of the active users are listed, in order', () => {
    assert.deepEqual(getActiveNames(users), ['Anna', 'Carl']);
});

test('no active users give an empty list', () => {
    assert.deepEqual(getActiveNames([{ name: 'Ben', active: false }]), []);
});

test('an empty list of users gives an empty list', () => {
    assert.deepEqual(getActiveNames([]), []);
});

test('the users array does not change', () => {
    getActiveNames(users);
    assert.equal(users.length, 3);
    assert.deepEqual(users[1], { name: 'Ben', active: false });
});
