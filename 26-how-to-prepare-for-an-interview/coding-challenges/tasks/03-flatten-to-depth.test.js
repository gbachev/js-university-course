import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { flatten } = await import(
    process.env.SOLUTIONS
        ? '../solutions/03-flatten-to-depth.js'
        : './03-flatten-to-depth.js'
);

const boxes = ['book', ['pen', ['ink', ['nib']]], 'mug'];

test('without a depth every level is opened', () => {
    assert.deepEqual(flatten(boxes), ['book', 'pen', 'ink', 'nib', 'mug']);
});

test('depth 1 opens one level only', () => {
    assert.deepEqual(flatten(boxes, 1), ['book', 'pen', ['ink', ['nib']], 'mug']);
});

test('depth 2 opens two levels', () => {
    assert.deepEqual(flatten(boxes, 2), ['book', 'pen', 'ink', ['nib'], 'mug']);
});

test('depth 0 gives a copy of the list', () => {
    const copy = flatten(boxes, 0);
    assert.deepEqual(copy, boxes);
    assert.notEqual(copy, boxes);
});

test('an empty list and empty nested lists give an empty array', () => {
    assert.deepEqual(flatten([]), []);
    assert.deepEqual(flatten([[], [[]]]), []);
});

test('the original list does not change', () => {
    const list = [1, [2, [3]]];
    flatten(list);
    assert.deepEqual(list, [1, [2, [3]]]);
});
