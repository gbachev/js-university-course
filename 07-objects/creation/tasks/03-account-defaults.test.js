import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { createAccount, accountDefaults } = await import(
    process.env.SOLUTIONS
        ? '../solutions/03-account-defaults.js'
        : './03-account-defaults.js'
);

test('the account has the email we pass in', () => {
    assert.equal(createAccount('anna@example.com').email, 'anna@example.com');
});

test('the plan and the currency come from the defaults', () => {
    const account = createAccount('anna@example.com');
    assert.equal(account.plan, 'free');
    assert.equal(account.currency, 'EUR');
});

test('the prototype of the account is accountDefaults', () => {
    assert.equal(Object.getPrototypeOf(createAccount('ben@example.com')), accountDefaults);
});

test('email is the only own property', () => {
    assert.deepEqual(Object.keys(createAccount('ben@example.com')), ['email']);
});
