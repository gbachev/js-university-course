import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { loadProfile } = await import(
    process.env.SOLUTIONS ? '../solutions/03-add-the-cause.js' : './03-add-the-cause.js'
);

test('valid JSON gives the profile', () => {
    assert.deepEqual(loadProfile('{"name":"Jane Doe"}'), { name: 'Jane Doe' });
});

test('broken JSON throws an Error that says what we were reading', () => {
    assert.throws(() => loadProfile('{name: Jane Doe}'), {
        name: 'Error',
        message: 'Could not load the profile'
    });
});

test('the original SyntaxError is kept as the cause', () => {
    assert.throws(
        () => loadProfile('{name: Jane Doe}'),
        (error) => error.cause instanceof SyntaxError
    );
});

test('an empty string is wrapped as well', () => {
    assert.throws(
        () => loadProfile(''),
        (error) => error.message === 'Could not load the profile' &&
            error.cause instanceof SyntaxError
    );
});
