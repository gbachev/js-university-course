import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { displayName } = await import(
    process.env.SOLUTIONS ? '../solutions/02-display-name.js' : './02-display-name.js'
);

test('the nickname is shown when the user has one', () => {
    assert.equal(displayName('jd', 'John'), 'jd');
});

test('the first name is shown when the nickname is empty', () => {
    assert.equal(displayName('', 'John'), 'John');
});

test('Guest is shown when the nickname and the first name are empty', () => {
    assert.equal(displayName('', ''), 'Guest');
});

test('the nickname wins even when there is no first name', () => {
    assert.equal(displayName('jane_d', ''), 'jane_d');
});
