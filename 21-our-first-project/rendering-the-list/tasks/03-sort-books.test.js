import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { sortBooks } = await import(
    process.env.SOLUTIONS ? '../solutions/03-sort-books.js' : './03-sort-books.js'
);

const persuasion = { key: 'p', title: 'Persuasion', author: 'Jane Austen', year: 1817 };
const dune = { key: 'd', title: 'Dune', author: 'Frank Herbert', year: 1965 };
const emma = { key: 'e', title: 'emma', author: 'Jane Austen', year: 1815 };
const notes = { key: 'n', title: 'Notes', author: 'Unknown author', year: null };
const titles = (books) => books.map((book) => book.title);

test('sorting by title goes A to Z and ignores upper and lower case', () => {
    assert.deepEqual(titles(sortBooks([persuasion, emma, dune], 'title')), [
        'Dune',
        'emma',
        'Persuasion',
    ]);
});

test('sorting by author goes A to Z', () => {
    assert.deepEqual(titles(sortBooks([notes, persuasion, dune], 'author')), [
        'Dune',
        'Persuasion',
        'Notes',
    ]);
});

test('books by the same author keep their order', () => {
    assert.deepEqual(titles(sortBooks([persuasion, dune, emma], 'author')), [
        'Dune',
        'Persuasion',
        'emma',
    ]);
});

test('sorting by year puts the oldest first and a missing year last', () => {
    assert.deepEqual(titles(sortBooks([notes, dune, persuasion, emma], 'year')), [
        'emma',
        'Persuasion',
        'Dune',
        'Notes',
    ]);
});

test('the list it receives is not changed', () => {
    const books = [persuasion, emma, dune];
    const sorted = sortBooks(books, 'title');
    assert.notEqual(sorted, books);
    assert.deepEqual(titles(books), ['Persuasion', 'emma', 'Dune']);
});
