import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { sortBooks } = await import(
    process.env.SOLUTIONS ? '../solutions/01-sort-in-the-worker.js' : './01-sort-in-the-worker.js'
);

const books = [
    { title: 'Ulysses', year: 1922 },
    { title: 'Emma', year: 1815 },
    { title: 'Dune', year: 1965 },
];

test('it sorts by title', () => {
    assert.deepEqual(sortBooks(books, 'title').map((book) => book.title), [
        'Dune',
        'Emma',
        'Ulysses',
    ]);
});

test('it sorts by year, the oldest first', () => {
    assert.deepEqual(sortBooks(books, 'year').map((book) => book.year), [1815, 1922, 1965]);
});

test('the books it gets stay in their order', () => {
    sortBooks(books, 'title');
    assert.deepEqual(books.map((book) => book.title), ['Ulysses', 'Emma', 'Dune']);
});

test('it returns a new array', () => {
    assert.notEqual(sortBooks(books, 'year'), books);
});

test('an empty list gives an empty list', () => {
    assert.deepEqual(sortBooks([], 'title'), []);
});

test('an unknown field throws an error', () => {
    assert.throws(() => sortBooks(books, 'price'), { message: 'Cannot sort by price' });
});
