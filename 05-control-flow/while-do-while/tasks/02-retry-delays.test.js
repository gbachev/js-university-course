import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { getRetryDelays } = await import(
    process.env.SOLUTIONS ? '../solutions/02-retry-delays.js' : './02-retry-delays.js'
);

test('each wait is twice as long as the one before', () => {
    assert.deepEqual(getRetryDelays(100, 1000), [100, 200, 400, 800]);
});

test('a wait equal to the maximum is still used', () => {
    assert.deepEqual(getRetryDelays(250, 1000), [250, 500, 1000]);
});

test('a first wait longer than the maximum still gives one retry', () => {
    assert.deepEqual(getRetryDelays(2000, 1000), [2000]);
});

test('a first wait equal to the maximum gives one retry', () => {
    assert.deepEqual(getRetryDelays(1000, 1000), [1000]);
});
