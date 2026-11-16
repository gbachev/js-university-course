import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { createBook } = await import(
    process.env.SOLUTIONS ? '../solutions/01-new-book.js' : './01-new-book.js'
);

test('returns a book with the title, the author and the pages', () => {
    assert.deepEqual(createBook('Dune', 'Frank Herbert', 412), {
        title: 'Dune',
        author: 'Frank Herbert',
        pages: 412,
        isRead: false,
    });
});

test('a new book is not read yet', () => {
    assert.equal(createBook('Emma', 'Jane Austen', 474).isRead, false);
});

test('every call gives a new object', () => {
    const first = createBook('Dune', 'Frank Herbert', 412);
    const second = createBook('Dune', 'Frank Herbert', 412);
    assert.notEqual(first, second);

    first.isRead = true;
    assert.equal(second.isRead, false);
});
