import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { hasField, toPublicProfile } = await import(
    process.env.SOLUTIONS ? '../solutions/03-public-profile.js' : './03-public-profile.js'
);

test('a field the user has is found', () => {
    assert.equal(hasField({ name: 'John Doe', email: 'john@example.com' }, 'email'), true);
});

test('a field the user does not have is not found', () => {
    assert.equal(hasField({ name: 'John Doe' }, 'email'), false);
});

test('a field is found even when its value is empty', () => {
    assert.equal(hasField({ name: 'John Doe', nickname: '' }, 'nickname'), true);
});

test('the password is removed and the other fields stay', () => {
    const user = { name: 'Jane Doe', email: 'jane@example.com', password: 'secret' };
    assert.deepEqual(toPublicProfile(user), { name: 'Jane Doe', email: 'jane@example.com' });
});

test('the password is removed from the object we pass in', () => {
    const user = { name: 'Jane Doe', password: 'secret' };
    toPublicProfile(user);
    assert.equal('password' in user, false);
});

test('a user without a password is returned as it is', () => {
    assert.deepEqual(toPublicProfile({ name: 'John Doe' }), { name: 'John Doe' });
});
