import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { createSignupForm } = await import(
    process.env.SOLUTIONS ? '../solutions/02-signup-form.js' : './02-signup-form.js'
);

test('the form starts with an empty email and password', () => {
    assert.deepEqual(createSignupForm(), { email: '', password: '' });
});

test('the user can type into the fields', () => {
    const form = createSignupForm();
    form.email = 'anna@example.com';
    form.password = 'secret';
    form.password = 'better-secret';
    assert.deepEqual(form, { email: 'anna@example.com', password: 'better-secret' });
});

test('a field with a typo in its name cannot be added', () => {
    const form = createSignupForm();
    assert.throws(() => {
        form.emial = 'anna@example.com';
    }, TypeError);
    assert.equal('emial' in form, false);
});

test('a field cannot be removed', () => {
    const form = createSignupForm();
    assert.throws(() => {
        delete form.password;
    }, TypeError);
});
