import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { bookFromForm } = await import(
    process.env.SOLUTIONS ? '../solutions/02-book-from-form.js' : './02-book-from-form.js'
);

test('a title and an author make a book with the given key', () => {
    assert.deepEqual(bookFromForm('Emma', 'Jane Austen', 'k1'), {
        key: 'k1',
        title: 'Emma',
        author: 'Jane Austen',
        year: null,
        coverId: null,
    });
});

test('spaces around the title and the author are trimmed', () => {
    const book = bookFromForm('  Emma ', ' Jane Austen  ', 'k1');
    assert.equal(book.title, 'Emma');
    assert.equal(book.author, 'Jane Austen');
});

test('an empty title makes no book', () => {
    assert.equal(bookFromForm('', 'Jane Austen', 'k2'), null);
});

test('a title of only spaces makes no book', () => {
    assert.equal(bookFromForm('   ', 'Jane Austen', 'k3'), null);
});

test('an empty author becomes Unknown author', () => {
    assert.equal(bookFromForm('Emma', '', 'k4').author, 'Unknown author');
});

test('an author of only spaces becomes Unknown author', () => {
    assert.equal(bookFromForm('Emma', '   ', 'k5').author, 'Unknown author');
});
