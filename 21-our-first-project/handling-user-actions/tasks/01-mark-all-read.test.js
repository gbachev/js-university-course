import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { markAllRead } = await import(
    process.env.SOLUTIONS ? '../solutions/01-mark-all-read.js' : './01-mark-all-read.js'
);

const dune = { key: 'dune', title: 'Dune', read: false };
const emma = { key: 'emma', title: 'Emma', read: true };

test('every book comes back with read: true', () => {
    assert.deepEqual(markAllRead([dune, emma]), [
        { key: 'dune', title: 'Dune', read: true },
        { key: 'emma', title: 'Emma', read: true },
    ]);
});

test('the array and the books it receives are not changed', () => {
    const books = [dune, emma];
    const result = markAllRead(books);
    assert.notEqual(result, books);
    assert.deepEqual(books, [dune, emma]);
    assert.equal(dune.read, false);
});

test('a list that is all read already comes back as the same array', () => {
    const books = [emma];
    assert.equal(markAllRead(books), books);
});

test('an empty list comes back as the same array', () => {
    const books = [];
    assert.equal(markAllRead(books), books);
});
