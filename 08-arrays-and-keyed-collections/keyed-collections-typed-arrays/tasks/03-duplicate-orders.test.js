import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { findDuplicates } = await import(
    process.env.SOLUTIONS ? '../solutions/03-duplicate-orders.js' : './03-duplicate-orders.js'
);

test('the ids that appear more than once are found', () => {
    assert.deepEqual(findDuplicates([101, 102, 101, 103, 102]), [101, 102]);
});

test('an id sent three times is listed once', () => {
    assert.deepEqual(findDuplicates([101, 101, 101]), [101]);
});

test('the ids are listed in the order of their second appearance', () => {
    assert.deepEqual(findDuplicates([101, 102, 102, 101]), [102, 101]);
});

test('no duplicates give an empty array', () => {
    assert.deepEqual(findDuplicates([101, 102, 103]), []);
});

test('no orders give an empty array', () => {
    assert.deepEqual(findDuplicates([]), []);
});
