import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { examStatus } = await import(
    process.env.SOLUTIONS ? '../solutions/01-exam-status.js' : './01-exam-status.js'
);

test('a score above the pass score passes', () => {
    assert.equal(examStatus(120, 100), 'pass');
});

test('a score of exactly the pass score passes', () => {
    assert.equal(examStatus(100, 100), 'pass');
});

test('a score below the pass score means try again', () => {
    assert.equal(examStatus(90, 100), 'try again');
});

test('a score of 0 means try again', () => {
    assert.equal(examStatus(0, 50), 'try again');
});
