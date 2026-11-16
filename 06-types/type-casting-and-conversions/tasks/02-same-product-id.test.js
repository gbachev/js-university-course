import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { isSameProduct } = await import(
    process.env.SOLUTIONS
        ? '../solutions/02-same-product-id.js'
        : './02-same-product-id.js'
);

test('the ID as a string matches the same ID as a number', () => {
    assert.equal(isSameProduct('42', 42), true);
});

test('a different ID does not match', () => {
    assert.equal(isSameProduct('43', 42), false);
});

test('a leading zero is a different ID', () => {
    assert.equal(isSameProduct('042', 42), false);
});

test('spaces around the ID make it a different ID', () => {
    assert.equal(isSameProduct(' 42', 42), false);
});

test('an empty string does not match the ID 0', () => {
    assert.equal(isSameProduct('', 0), false);
});
