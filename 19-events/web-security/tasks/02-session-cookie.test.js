import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { missingProtections } = await import(
    process.env.SOLUTIONS ? '../solutions/02-session-cookie.js' : './02-session-cookie.js'
);

test('the cookie from the lecture lacks nothing', () => {
    assert.deepEqual(
        missingProtections('session=4f9a1c; Path=/; HttpOnly; Secure; SameSite=Lax'),
        [],
    );
});

test('a bare cookie lacks all three, in order', () => {
    assert.deepEqual(
        missingProtections('session=4f9a1c'),
        ['HttpOnly', 'Secure', 'SameSite'],
    );
});

test('attribute names count in any case', () => {
    const header = 'session=4f9a1c; httponly; SECURE; samesite=Strict';
    assert.deepEqual(missingProtections(header), []);
});

test('SameSite=None does not count as a protection', () => {
    assert.deepEqual(
        missingProtections('session=4f9a1c; HttpOnly; Secure; SameSite=None'),
        ['SameSite'],
    );
});

test('a cookie value that says Secure is not the Secure attribute', () => {
    assert.deepEqual(missingProtections('mode=Secure; HttpOnly'), ['Secure', 'SameSite']);
});

test('attributes without spaces after the semicolons still count', () => {
    assert.deepEqual(missingProtections('session=4f9a1c;HttpOnly;Secure;SameSite=Lax'), []);
});
