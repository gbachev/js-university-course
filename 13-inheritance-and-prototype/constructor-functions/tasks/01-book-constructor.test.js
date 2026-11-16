import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { Book } = await import(
    process.env.SOLUTIONS
        ? '../solutions/01-book-constructor.js'
        : './01-book-constructor.js'
);

test('a new book stores its title, author and pages', () => {
    const dune = new Book('Dune', 'Frank Herbert', 412);
    assert.equal(dune.title, 'Dune');
    assert.equal(dune.author, 'Frank Herbert');
    assert.equal(dune.pages, 412);
});

test('describe returns the title, the author and the pages', () => {
    assert.equal(
        new Book('Emma', 'Jane Austen', 474).describe(),
        'Emma by Jane Austen, 474 pages'
    );
});

test('a book owns only its data', () => {
    assert.deepEqual(Object.keys(new Book('Dune', 'Frank Herbert', 412)).sort(), [
        'author',
        'pages',
        'title'
    ]);
});

test('all books share one describe function on Book.prototype', () => {
    const dune = new Book('Dune', 'Frank Herbert', 412);
    const emma = new Book('Emma', 'Jane Austen', 474);
    assert.equal(dune.describe, emma.describe);
    assert.equal(Object.hasOwn(Book.prototype, 'describe'), true);
});

test('a book is an instance of Book', () => {
    assert.equal(new Book('Dune', 'Frank Herbert', 412) instanceof Book, true);
});
