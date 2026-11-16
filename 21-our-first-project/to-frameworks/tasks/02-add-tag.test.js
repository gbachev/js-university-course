import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { addTag } = await import(
    process.env.SOLUTIONS ? '../solutions/02-add-tag.js' : './02-add-tag.js'
);

// Fresh books for each test, so a test that changes them cannot break the next one.
const makeBooks = () => [
    { key: 'dune', title: 'Dune', tags: ['sci-fi'] },
    { key: 'emma', title: 'Emma', tags: [] },
];

test('the book gets the new tag at the end of its tags', () => {
    const next = addTag(makeBooks(), 'dune', 'classic');
    assert.deepEqual(next[0], {
        key: 'dune',
        title: 'Dune',
        tags: ['sci-fi', 'classic'],
    });
});

test('returns a new array, so Object.is() sees a change', () => {
    const books = makeBooks();
    assert.equal(Object.is(addTag(books, 'dune', 'classic'), books), false);
});

test('the changed book and its tags are new objects', () => {
    const books = makeBooks();
    const next = addTag(books, 'dune', 'classic');
    assert.notEqual(next[0], books[0]);
    assert.notEqual(next[0].tags, books[0].tags);
});

test('the old book keeps its old tags', () => {
    const books = makeBooks();
    addTag(books, 'dune', 'classic');
    assert.deepEqual(books, makeBooks());
});

test('the other books stay the same objects', () => {
    const books = makeBooks();
    const next = addTag(books, 'dune', 'classic');
    assert.equal(next[1], books[1]);
});

test('returns the same array when no book has that key', () => {
    const books = makeBooks();
    assert.equal(addTag(books, 'persuasion', 'classic'), books);
});

test('returns the same array when the book already has that tag', () => {
    const books = makeBooks();
    assert.equal(addTag(books, 'dune', 'sci-fi'), books);
    assert.deepEqual(books, makeBooks());
});
