import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { addBook, toggleRead } = await import(
    process.env.SOLUTIONS ? '../solutions/02-what-the-tests-found.js' : './02-what-the-tests-found.js'
);

const dune = { key: 'dune', title: 'Dune', author: 'Frank Herbert' };
// A fresh book for each test, so a test that changes it cannot break the next one.
const makeEmma = () => ({ key: 'emma', title: 'Emma', author: 'Jane Austen', read: true });

test('addBook() adds the book with read: false', () => {
    assert.deepEqual(addBook([], dune), [{ ...dune, read: false }]);
});

test('addBook() does not change the list it receives', () => {
    const books = [];
    addBook(books, dune);
    assert.deepEqual(books, []);
});

test('addBook() returns the same list for a book that is already there', () => {
    const emma = makeEmma();
    const books = [emma];
    assert.equal(addBook(books, emma), books);
});

test('toggleRead() flips read on the book with that key', () => {
    const emma = makeEmma();
    const result = toggleRead([emma], 'emma');
    assert.equal(result[0].read, false);
});

test('toggleRead() does not change the list or the book it receives', () => {
    const emma = makeEmma();
    const books = [emma];
    const result = toggleRead(books, 'emma');
    assert.notEqual(result, books);
    assert.equal(emma.read, true);
    assert.equal(books[0], emma);
});

test('toggleRead() keeps the other books as the same objects', () => {
    const emma = makeEmma();
    const book = { ...dune, read: false };
    const result = toggleRead([emma, book], 'emma');
    assert.equal(result[1], book);
});
