import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { toPublicUser } = await import(
    process.env.SOLUTIONS ? '../solutions/02-public-user.js' : './02-public-user.js'
);

test('the password is not in the public user', () => {
    const user = { id: 1, name: 'Jane', password: 'secret123' };

    assert.deepEqual(toPublicUser(user), { id: 1, name: 'Jane' });
});

test('all the other properties stay', () => {
    const user = {
        id: 2,
        name: 'John',
        email: 'john@example.com',
        role: 'admin',
        password: 'p4ssw0rd',
    };

    assert.deepEqual(toPublicUser(user), {
        id: 2,
        name: 'John',
        email: 'john@example.com',
        role: 'admin',
    });
});

test('a user without a password keeps all their properties', () => {
    assert.deepEqual(toPublicUser({ id: 3, name: 'Maria' }), { id: 3, name: 'Maria' });
});

test('the user we got still has the password', () => {
    const user = { id: 1, name: 'Jane', password: 'secret123' };
    toPublicUser(user);

    assert.deepEqual(user, { id: 1, name: 'Jane', password: 'secret123' });
});
