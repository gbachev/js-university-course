import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { toPublicJson } = await import(
    process.env.SOLUTIONS
        ? '../solutions/01-hide-the-secrets.js'
        : './01-hide-the-secrets.js'
);

test('the result is a JSON string', () => {
    assert.equal(typeof toPublicJson({ id: 1, name: 'John Doe' }), 'string');
});

test('the password is dropped and the rest is kept', () => {
    assert.equal(
        toPublicJson({ id: 7, name: 'Jane Doe', password: 's3cret' }),
        '{"id":7,"name":"Jane Doe"}'
    );
});

test('a token inside a nested object is dropped too', () => {
    const user = {
        id: 8,
        name: 'John Doe',
        token: 'tok_main',
        billing: { iban: 'BG80BNBG96611020345678', token: 'tok_1' },
    };
    assert.deepEqual(JSON.parse(toPublicJson(user)), {
        id: 8,
        name: 'John Doe',
        billing: { iban: 'BG80BNBG96611020345678' },
    });
});

test('a user without secrets comes out unchanged', () => {
    const user = { id: 9, roles: ['admin', 'editor'], active: true };
    assert.deepEqual(JSON.parse(toPublicJson(user)), user);
});

test('the user object we pass in keeps its password', () => {
    const user = { id: 7, password: 's3cret' };
    toPublicJson(user);
    assert.deepEqual(user, { id: 7, password: 's3cret' });
});
