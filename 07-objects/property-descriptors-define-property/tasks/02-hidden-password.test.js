import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { attachPasswordHash } = await import(
    process.env.SOLUTIONS ? '../solutions/02-hidden-password.js' : './02-hidden-password.js'
);

test('we can still read the hash', () => {
    assert.equal(attachPasswordHash({ name: 'Anna' }, 'a1b2c3').passwordHash, 'a1b2c3');
});

test('JSON.stringify leaves the hash out', () => {
    const user = attachPasswordHash({ name: 'Anna' }, 'a1b2c3');
    assert.equal(JSON.stringify(user), '{"name":"Anna"}');
});

test('Object.keys() and for...in do not list the hash', () => {
    const user = attachPasswordHash({ name: 'Anna', role: 'admin' }, 'a1b2c3');
    assert.deepEqual(Object.keys(user), ['name', 'role']);

    let keys = '';
    for (const key in user) {
        keys += key + ' ';
    }
    assert.equal(keys, 'name role ');
});

test('returns the user we pass in', () => {
    const user = { name: 'Anna' };
    assert.equal(attachPasswordHash(user, 'a1b2c3'), user);
});
