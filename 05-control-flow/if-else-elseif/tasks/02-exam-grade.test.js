import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { getGrade } = await import(
    process.env.SOLUTIONS ? '../solutions/02-exam-grade.js' : './02-exam-grade.js'
);

test('a score in each range gets its grade', () => {
    assert.equal(getGrade(95), 'A');
    assert.equal(getGrade(85), 'B');
    assert.equal(getGrade(72), 'C');
    assert.equal(getGrade(64), 'D');
    assert.equal(getGrade(30), 'F');
});

test('the lowest score of a range gets that range\'s grade', () => {
    assert.equal(getGrade(90), 'A');
    assert.equal(getGrade(80), 'B');
    assert.equal(getGrade(70), 'C');
    assert.equal(getGrade(60), 'D');
});

test('the highest score of a range does not jump to the next grade', () => {
    assert.equal(getGrade(89), 'B');
    assert.equal(getGrade(59), 'F');
});

test('0 and 100 are valid scores', () => {
    assert.equal(getGrade(0), 'F');
    assert.equal(getGrade(100), 'A');
});

test('a score below 0 or above 100 is invalid', () => {
    assert.equal(getGrade(-5), 'Invalid score');
    assert.equal(getGrade(120), 'Invalid score');
});
