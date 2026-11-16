import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { READ, WRITE, DELETE, revokePermission } = await import(
    process.env.SOLUTIONS ? '../solutions/03-revoke-permission.js' : './03-revoke-permission.js'
);

test('revoking delete from a user with every permission leaves read and write', () => {
    assert.equal(revokePermission(READ | WRITE | DELETE, DELETE), READ | WRITE);
});

test('revoking read leaves the other permissions as they were', () => {
    assert.equal(revokePermission(READ | DELETE, READ), DELETE);
});

test('revoking a permission the user does not have changes nothing', () => {
    assert.equal(revokePermission(READ, DELETE), READ);
});

test('revoking from a user with no permissions leaves no permissions', () => {
    assert.equal(revokePermission(0, WRITE), 0);
});
