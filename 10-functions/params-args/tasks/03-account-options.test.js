import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { createAccount } = await import(
    process.env.SOLUTIONS
        ? '../solutions/03-account-options.js'
        : './03-account-options.js'
);

test('the options we pass are used', () => {
    assert.deepEqual(
        createAccount({ email: 'kai@example.com', plan: 'pro', newsletter: true }),
        { email: 'kai@example.com', plan: 'pro', newsletter: true }
    );
});

test('a missing plan and newsletter get their defaults', () => {
    assert.deepEqual(createAccount({ email: 'ana@example.com' }), {
        email: 'ana@example.com',
        plan: 'free',
        newsletter: false,
    });
});

test('a plan we pass is kept when the newsletter is missing', () => {
    assert.deepEqual(createAccount({ email: 'jo@example.com', plan: 'pro' }), {
        email: 'jo@example.com',
        plan: 'pro',
        newsletter: false,
    });
});

test('a call with no argument does not throw and uses the defaults', () => {
    assert.deepEqual(createAccount(), {
        email: undefined,
        plan: 'free',
        newsletter: false,
    });
});

test('the account is a new object, not the options object', () => {
    const options = { email: 'lea@example.com' };
    assert.notEqual(createAccount(options), options);
});
