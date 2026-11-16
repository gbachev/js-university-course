import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { addedText } = await import(
    process.env.SOLUTIONS ? '../solutions/01-old-saved-books.js' : './01-old-saved-books.js'
);

const dune = { key: '/works/OL893414W', title: 'Dune', read: true };

test('shows the day the book was added', () => {
    const book = { ...dune, addedAt: Date.UTC(2026, 10, 14) };
    assert.equal(addedText(book), 'Added 2026-11-14');
});

test('is empty for a book saved by version 1.0.0', () => {
    assert.equal(addedText(dune), '');
});

test('works for a list that mixes old and new books', () => {
    const emma = { key: '/works/OL66554W', title: 'Emma', read: false, addedAt: 0 };
    assert.deepEqual([dune, emma].map(addedText), ['', 'Added 1970-01-01']);
});

test('does not change the book it receives', () => {
    const book = { ...dune };
    addedText(book);
    assert.deepEqual(book, dune);
});
