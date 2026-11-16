import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { countsText } = await import(
    process.env.SOLUTIONS ? '../solutions/01-counts-text.js' : './01-counts-text.js'
);

const dune = { key: 'dune', title: 'Dune', read: false };
const emma = { key: 'emma', title: 'Emma', read: true };
const persuasion = { key: 'persuasion', title: 'Persuasion', read: true };

test('an empty list says there are no books yet', () => {
    assert.equal(countsText([]), 'No books yet');
});

test('one unread book keeps the singular', () => {
    assert.equal(countsText([dune]), '1 book, 0 read');
});

test('a mixed list counts all books and the read ones', () => {
    assert.equal(countsText([dune, emma, persuasion]), '3 books, 2 read');
});

test('two books, both read, say all of them are read', () => {
    assert.equal(countsText([emma, persuasion]), 'All 2 books read');
});

test('one read book keeps the usual line', () => {
    assert.equal(countsText([emma]), '1 book, 1 read');
});
