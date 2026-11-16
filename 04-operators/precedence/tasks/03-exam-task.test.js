import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { answers } = await import(
    process.env.SOLUTIONS ? '../solutions/03-exam-task.js' : './03-exam-task.js'
);

// We run the exam line here, so the tests compare our answers with what JavaScript does.
let a = 3, b = 4, c = 5;
let result = ++a + b * c / 2 - a++ + 6 / (b-- + ++a - --c);

test('the result is right', () => {
    assert.equal(answers.result, result);
});

test('a is right after the line has run', () => {
    assert.equal(answers.a, a);
});

test('b is right after the line has run', () => {
    assert.equal(answers.b, b);
});

test('c is right after the line has run', () => {
    assert.equal(answers.c, c);
});
