import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { typeTag } = await import(
    process.env.SOLUTIONS ? '../solutions/01-type-tag.js' : './01-type-tag.js'
);

test('an array is tagged Array', () => {
    assert.equal(typeTag(['book', 'pen']), 'Array');
});

test('a date is tagged Date', () => {
    assert.equal(typeTag(new Date()), 'Date');
});

test('null and undefined get their own tags', () => {
    assert.equal(typeTag(null), 'Null');
    assert.equal(typeTag(undefined), 'Undefined');
});

test('a plain object is tagged Object', () => {
    assert.equal(typeTag({ id: 'A1' }), 'Object');
});

test('numbers and strings are tagged Number and String', () => {
    assert.equal(typeTag(49), 'Number');
    assert.equal(typeTag('EUR'), 'String');
});
