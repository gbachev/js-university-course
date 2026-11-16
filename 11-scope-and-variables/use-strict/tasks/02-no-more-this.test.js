import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { fullName } = await import(
    process.env.SOLUTIONS ? '../solutions/02-no-more-this.js' : './02-no-more-this.js'
);

test('the first and the last name are joined with a space', () => {
    assert.equal(fullName({ firstName: 'Ada', lastName: 'Lovelace' }), 'Ada Lovelace');
});

test('every user gets their own name', () => {
    assert.equal(fullName({ firstName: 'Grace', lastName: 'Hopper' }), 'Grace Hopper');
    assert.equal(fullName({ firstName: 'Alan', lastName: 'Turing' }), 'Alan Turing');
});

test('the user object is not changed', () => {
    const user = { firstName: 'Ada', lastName: 'Lovelace' };
    fullName(user);
    assert.deepEqual(user, { firstName: 'Ada', lastName: 'Lovelace' });
});
