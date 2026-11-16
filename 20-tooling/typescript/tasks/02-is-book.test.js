import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { isBook } = await import(
    process.env.SOLUTIONS ? '../solutions/02-is-book.js' : './02-is-book.js'
);

const dune = {
    key: '/works/OL893414W',
    title: 'Dune',
    author: 'Frank Herbert',
    year: 1965,
    coverId: 11481354,
    read: true,
};

test('a complete book is a book', () => {
    assert.equal(isBook(dune), true);
});

test('a book with no year and no cover is a book', () => {
    assert.equal(isBook({ ...dune, year: null, coverId: null }), true);
});

test('a book read back with JSON.parse is a book', () => {
    assert.equal(isBook(JSON.parse(JSON.stringify(dune))), true);
});

test('null, an array, a string and a number are not books', () => {
    assert.equal(isBook(null), false);
    assert.equal(isBook([dune]), false);
    assert.equal(isBook('Dune'), false);
    assert.equal(isBook(1965), false);
});

test('an object without the read or the key property is not a book', () => {
    const { read, ...withoutRead } = dune;
    assert.equal(isBook(withoutRead), false);
    const { key, ...withoutKey } = dune;
    assert.equal(isBook(withoutKey), false);
});

test('a year, a cover or a read saved as a string is not a book', () => {
    assert.equal(isBook({ ...dune, year: '1965' }), false);
    assert.equal(isBook({ ...dune, coverId: '11481354' }), false);
    assert.equal(isBook({ ...dune, read: 'true' }), false);
});

test('a title or an author that is not a string is not a book', () => {
    assert.equal(isBook({ ...dune, title: 42 }), false);
    assert.equal(isBook({ ...dune, author: undefined }), false);
});
