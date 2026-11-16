import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { updateBook } = await import(
    process.env.SOLUTIONS ? '../solutions/03-update-book.js' : './03-update-book.js'
);

const emma = {
    key: 'k1',
    title: 'Emmma',
    author: 'Unknown author',
    year: null,
    coverId: null,
    read: false,
};
const dune = {
    key: '/works/OL893414W',
    title: 'Dune',
    author: 'Frank Herbert',
    year: 1965,
    coverId: 11481354,
    read: true,
};

test('the book with the key gets the changes', () => {
    const [first] = updateBook([emma, dune], 'k1', { title: 'Emma' });
    assert.deepEqual(first, { ...emma, title: 'Emma' });
});

test('several properties can change at once', () => {
    const [first] = updateBook([emma], 'k1', { author: 'Jane Austen', year: 1815 });
    assert.equal(first.author, 'Jane Austen');
    assert.equal(first.year, 1815);
    assert.equal(first.title, 'Emmma');
});

test('the other books stay the same objects', () => {
    const result = updateBook([emma, dune], 'k1', { title: 'Emma' });
    assert.equal(result[1], dune);
});

test('the array and the book it receives are not changed', () => {
    const books = [emma, dune];
    const result = updateBook(books, 'k1', { title: 'Emma' });
    assert.notEqual(result, books);
    assert.equal(books[0], emma);
    assert.equal(emma.title, 'Emmma');
});

test('the key cannot be changed', () => {
    const [first] = updateBook([emma], 'k1', { key: 'k2', title: 'Emma' });
    assert.equal(first.key, 'k1');
    assert.equal(first.title, 'Emma');
});

test('an unknown key returns the same array', () => {
    const books = [emma, dune];
    assert.equal(updateBook(books, 'nope', { title: 'Emma' }), books);
});
