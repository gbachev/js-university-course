import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { isUnanswered } = await import(
    process.env.SOLUTIONS
        ? '../solutions/02-unanswered-questions.js'
        : './02-unanswered-questions.js'
);

test('a skipped question is unanswered', () => {
    assert.equal(isUnanswered(undefined), true);
});

test('a rating of 0 is an answer', () => {
    assert.equal(isUnanswered(0), false);
});

test('the answer false is an answer', () => {
    assert.equal(isUnanswered(false), false);
});

test('an empty comment is an answer', () => {
    assert.equal(isUnanswered(''), false);
});

test('a text answer is an answer', () => {
    assert.equal(isUnanswered('Great course'), false);
});
