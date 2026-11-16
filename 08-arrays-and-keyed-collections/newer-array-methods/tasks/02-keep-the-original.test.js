import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { sortByTitle, newestFirst, removeBook, replaceBook } = await import(
    process.env.SOLUTIONS
        ? '../solutions/02-keep-the-original.js'
        : './02-keep-the-original.js'
);

function makeBooks() {
    return [{ title: 'Emma' }, { title: 'Dune' }, { title: 'Beloved' }];
}

function titles(books) {
    return books.map(book => book.title);
}

test('sortByTitle() returns the books by title and keeps the original order', () => {
    const books = makeBooks();
    const sorted = sortByTitle(books);
    assert.deepEqual(titles(sorted), ['Beloved', 'Dune', 'Emma']);
    assert.deepEqual(titles(books), ['Emma', 'Dune', 'Beloved']);
    assert.notEqual(sorted, books);
});

test('newestFirst() returns the books reversed and keeps the original order', () => {
    const books = makeBooks();
    assert.deepEqual(titles(newestFirst(books)), ['Beloved', 'Dune', 'Emma']);
    assert.deepEqual(titles(books), ['Emma', 'Dune', 'Beloved']);
});

test('removeBook() returns the list without the book and keeps the original', () => {
    const books = makeBooks();
    assert.deepEqual(titles(removeBook(books, 0)), ['Dune', 'Beloved']);
    assert.deepEqual(titles(removeBook(books, -1)), ['Emma', 'Dune']);
    assert.deepEqual(titles(books), ['Emma', 'Dune', 'Beloved']);
});

test('replaceBook() returns the list with the new book and keeps the original', () => {
    const books = makeBooks();
    const hyperion = { title: 'Hyperion' };
    assert.deepEqual(
        titles(replaceBook(books, 1, hyperion)),
        ['Emma', 'Hyperion', 'Beloved']
    );
    assert.deepEqual(
        titles(replaceBook(books, -1, hyperion)),
        ['Emma', 'Dune', 'Hyperion']
    );
    assert.deepEqual(titles(books), ['Emma', 'Dune', 'Beloved']);
});

test('replaceBook() with an index past either end throws a RangeError', () => {
    const books = makeBooks();
    assert.throws(() => replaceBook(books, 3, { title: 'Hyperion' }), RangeError);
    assert.throws(() => replaceBook(books, -4, { title: 'Hyperion' }), RangeError);
});
