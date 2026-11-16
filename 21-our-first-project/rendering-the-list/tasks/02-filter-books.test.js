import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { visibleBooks } = await import(
    process.env.SOLUTIONS ? '../solutions/02-filter-books.js' : './02-filter-books.js'
);

const dune = { key: 'dune', title: 'Dune', read: false };
const emma = { key: 'emma', title: 'Emma', read: true };
const persuasion = { key: 'persuasion', title: 'Persuasion', read: false };
const books = [dune, emma, persuasion];

test('unread shows the books with read: false, in their order', () => {
    assert.deepEqual(visibleBooks(books, 'unread'), [dune, persuasion]);
});

test('read shows the books with read: true', () => {
    assert.deepEqual(visibleBooks(books, 'read'), [emma]);
});

test('all shows every book, in a new array', () => {
    const result = visibleBooks(books, 'all');
    assert.deepEqual(result, books);
    assert.notEqual(result, books);
});

test('a filter with no matching books gives an empty array', () => {
    assert.deepEqual(visibleBooks([dune], 'read'), []);
});

test('the list it receives is not changed', () => {
    visibleBooks(books, 'read');
    assert.deepEqual(books, [dune, emma, persuasion]);
});

test('an unknown filter throws an error that names it', () => {
    assert.throws(() => visibleBooks(books, 'done'), {
        name: 'Error',
        message: 'Unknown filter: done',
    });
});
