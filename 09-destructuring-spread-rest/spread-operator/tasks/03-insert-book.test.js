import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { insertBook } = await import(
    process.env.SOLUTIONS ? '../solutions/03-insert-book.js' : './03-insert-book.js'
);

test('the book goes in the middle of the list', () => {
    assert.deepEqual(insertBook(['Dune', 'Emma', 'Ulysses'], 1, 'Beloved'), [
        'Dune',
        'Beloved',
        'Emma',
        'Ulysses',
    ]);
});

test('position 0 puts the book at the start', () => {
    const readingList = insertBook(['Dune', 'Emma'], 0, 'Beloved');

    assert.deepEqual(readingList, ['Beloved', 'Dune', 'Emma']);
});

test('the length of the list as the position adds the book at the end', () => {
    const readingList = insertBook(['Dune', 'Emma'], 2, 'Beloved');

    assert.deepEqual(readingList, ['Dune', 'Emma', 'Beloved']);
});

test('a book goes into an empty list', () => {
    assert.deepEqual(insertBook([], 0, 'Beloved'), ['Beloved']);
});

test('the list we got does not change', () => {
    const readingList = ['Dune', 'Emma', 'Ulysses'];
    insertBook(readingList, 1, 'Beloved');

    assert.deepEqual(readingList, ['Dune', 'Emma', 'Ulysses']);
});
