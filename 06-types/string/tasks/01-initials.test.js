import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { getInitials } = await import(
    process.env.SOLUTIONS ? '../solutions/01-initials.js' : './01-initials.js'
);

test('a first and a last name give two initials', () => {
    assert.equal(getInitials('Ada Lovelace'), 'AL');
});

test('a name in lowercase gives uppercase initials', () => {
    assert.equal(getInitials('grace hopper'), 'GH');
});

test('spaces before and after the name are ignored', () => {
    assert.equal(getInitials('  Alan Turing  '), 'AT');
});

test('short names work too', () => {
    assert.equal(getInitials('Bo Li'), 'BL');
});
