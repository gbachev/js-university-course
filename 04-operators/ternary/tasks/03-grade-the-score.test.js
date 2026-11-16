import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { grade } = await import(
    process.env.SOLUTIONS ? '../solutions/03-grade-the-score.js' : './03-grade-the-score.js'
);

test('90 and above is an A', () => {
    assert.equal(grade(95), 'A');
    assert.equal(grade(90), 'A');
    assert.equal(grade(100), 'A');
});

test('from 75 to 89 is a B', () => {
    assert.equal(grade(89), 'B');
    assert.equal(grade(75), 'B');
});

test('from 50 to 74 is a C', () => {
    assert.equal(grade(74), 'C');
    assert.equal(grade(50), 'C');
});

test('below 50 is an F', () => {
    assert.equal(grade(49), 'F');
    assert.equal(grade(0), 'F');
});
