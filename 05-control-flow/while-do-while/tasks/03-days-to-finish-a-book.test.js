import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { daysToFinish } = await import(
    process.env.SOLUTIONS
        ? '../solutions/03-days-to-finish-a-book.js'
        : './03-days-to-finish-a-book.js'
);

test('a shorter last day still counts as a day', () => {
    assert.equal(daysToFinish(100, 30), 4);
});

test('a book that splits evenly takes exactly that many days', () => {
    assert.equal(daysToFinish(90, 30), 3);
});

test('a book shorter than one day of reading takes one day', () => {
    assert.equal(daysToFinish(12, 30), 1);
});

test('a book with 0 pages takes 0 days', () => {
    assert.equal(daysToFinish(0, 30), 0);
});
