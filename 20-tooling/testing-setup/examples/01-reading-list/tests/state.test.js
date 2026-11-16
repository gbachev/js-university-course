// tests/state.test.js
import { describe, expect, test } from 'vitest';
import { addBook, removeBook } from '../src/state.js';

const dune = { key: '/works/OL893414W', title: 'Dune' };

describe('addBook', () => {
    test('adds the book as unread', () => {
        // Arrange
        const books = [];

        // Act
        const result = addBook(books, dune);

        // Assert
        expect(result).toEqual([{ ...dune, read: false }]);
    });

    test('does not add the same book twice', () => {
        const books = addBook([], dune);

        expect(addBook(books, dune)).toBe(books);
    });
});

const emma = { key: '/works/OL66513W', title: 'Emma' };

test('removeBook keeps every other book', () => {
    const books = addBook(addBook([], dune), emma);

    const result = removeBook(books, dune.key);

    expect(result).toHaveLength(1);
    expect(result[0].title).toBe('Emma');
    expect(result[0]).toBe(books[1]);
    expect(result).toEqual([{ ...emma, read: false }]);
    expect(result).not.toContain(books[0]);
});
