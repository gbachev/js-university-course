import assert from 'node:assert/strict';
import { test } from 'node:test';
import { hashPassword, verifyPassword } from '../src/auth/passwords.js';

test('the same password gets a different hash each time', async () => {
    const first = await hashPassword('correct horse');
    const second = await hashPassword('correct horse');

    assert.notEqual(first, second);
});

test('verifyPassword accepts the right password and refuses a wrong one', async () => {
    const stored = await hashPassword('correct horse');

    assert.equal(await verifyPassword('correct horse', stored), true);
    assert.equal(await verifyPassword('correct horsE', stored), false);
    assert.equal(await verifyPassword('', stored), false);
});

test('the stored value never contains the password', async () => {
    const stored = await hashPassword('correct horse');

    assert.equal(stored.includes('correct horse'), false);
    assert.match(stored, /^scrypt:16384:8:5:[0-9a-f]{32}:[0-9a-f]{128}$/);
});
