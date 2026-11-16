import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { toUser } = await import(
    process.env.SOLUTIONS ? '../solutions/02-api-user.js' : './02-api-user.js'
);

test('the API names become name, email and role', () => {
    const apiUser = {
        user_name: 'Jane',
        user_email: 'jane@example.com',
        user_role: 'admin',
    };

    assert.deepEqual(toUser(apiUser), {
        name: 'Jane',
        email: 'jane@example.com',
        role: 'admin',
    });
});

test('a user without a role is a customer', () => {
    assert.deepEqual(toUser({ user_name: 'John', user_email: 'john@example.com' }), {
        name: 'John',
        email: 'john@example.com',
        role: 'customer',
    });
});

test('other properties from the API are not copied', () => {
    const apiUser = {
        user_id: 42,
        user_name: 'Maria',
        user_email: 'maria@example.com',
        user_role: 'editor',
        created_at: '2026-11-16',
    };

    assert.deepEqual(toUser(apiUser), {
        name: 'Maria',
        email: 'maria@example.com',
        role: 'editor',
    });
});
