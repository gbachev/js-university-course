import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { isBook } = await import(
    process.env.SOLUTIONS ? '../solutions/02-stricter-is-book.js' : './02-stricter-is-book.js'
);

const dune = {
    key: '/works/OL893414W',
    title: 'Dune',
    author: 'Frank Herbert',
    year: 1965,
    coverId: 11481354,
    read: false,
};

test('a full book from the search is a book', () => {
    assert.equal(isBook(dune), true);
});

test('a book added by hand, with year and cover null, is a book', () => {
    assert.equal(isBook({ ...dune, key: 'e24b3b00', year: null, coverId: null }), true);
});

test('a year or cover saved as a string is not a book', () => {
    assert.equal(isBook({ ...dune, year: '1965' }), false);
    assert.equal(isBook({ ...dune, coverId: '11481354' }), false);
});

test('an author that is not a string is not a book', () => {
    assert.equal(isBook({ ...dune, author: 42 }), false);
});

test('a book with a property missing is not a book', () => {
    assert.equal(isBook({ key: 'd1', title: 'Dune', read: false }), false);
    const { coverId, ...noCover } = dune;
    assert.equal(isBook(noCover), false);
});

test('null, an array and plain values are not books', () => {
    assert.equal(isBook(null), false);
    assert.equal(isBook('Dune'), false);
    assert.equal(isBook(42), false);
    assert.equal(isBook([]), false);
});
