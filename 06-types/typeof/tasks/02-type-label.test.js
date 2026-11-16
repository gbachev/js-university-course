import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { typeLabel } = await import(
    process.env.SOLUTIONS ? '../solutions/02-type-label.js' : './02-type-label.js'
);

test('null gets the label null', () => {
    assert.equal(typeLabel(null), 'null');
});

test('primitives get the label typeof gives them', () => {
    assert.equal(typeLabel('Hi!'), 'string');
    assert.equal(typeLabel(5), 'number');
    assert.equal(typeLabel(true), 'boolean');
    assert.equal(typeLabel(10n), 'bigint');
    assert.equal(typeLabel(undefined), 'undefined');
});

test('objects and arrays get the label object', () => {
    assert.equal(typeLabel({}), 'object');
    assert.equal(typeLabel([]), 'object');
});

test('a function gets the label function', () => {
    assert.equal(typeLabel(function () {}), 'function');
});
