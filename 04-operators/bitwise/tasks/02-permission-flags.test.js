import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { READ, WRITE, DELETE, hasPermission, grantPermission } = await import(
    process.env.SOLUTIONS ? '../solutions/02-permission-flags.js' : './02-permission-flags.js'
);

test('a user who can read and write has the write permission', () => {
    assert.equal(hasPermission(READ | WRITE, WRITE), true);
});

test('a user who can read and write does not have the delete permission', () => {
    assert.equal(hasPermission(READ | WRITE, DELETE), false);
});

test('a user with no permissions cannot even read', () => {
    assert.equal(hasPermission(0, READ), false);
});

test('granting write to a reader gives read and write', () => {
    assert.equal(grantPermission(READ, WRITE), 3);
});

test('granting a permission the user already has changes nothing', () => {
    assert.equal(grantPermission(READ | WRITE, WRITE), 3);
});

test('a granted permission can be checked right away', () => {
    assert.equal(hasPermission(grantPermission(0, DELETE), DELETE), true);
});
