import { describe, expect, it } from 'vitest';
import {
    addBook,
    countBooks,
    countsText,
    removeBook,
    searchMessage,
    toggleRead,
} from '../src/state.js';

const dune = {
    key: '/works/OL893414W',
    title: 'Dune',
    author: 'Frank Herbert',
};
const emma = { key: '/works/OL66554W', title: 'Emma', author: 'Jane Austen' };

describe('addBook', () => {
    it('adds the book as unread', () => {
        expect(addBook([], dune)).toEqual([{ ...dune, read: false }]);
    });

    it('does not add the same book twice', () => {
        const books = addBook([], dune);
        expect(addBook(books, dune)).toBe(books);
    });

    it('does not change the list it receives', () => {
        const books = [];
        addBook(books, dune);
        expect(books).toEqual([]);
    });
});

describe('removeBook', () => {
    it('removes only the book with that key', () => {
        const books = addBook(addBook([], dune), emma);
        expect(removeBook(books, dune.key)).toEqual([{ ...emma, read: false }]);
    });
});

describe('toggleRead', () => {
    it('flips read on one book and back again', () => {
        const books = addBook(addBook([], dune), emma);
        const once = toggleRead(books, dune.key);
        expect(once[0].read).toBe(true);
        expect(once[1].read).toBe(false);
        expect(toggleRead(once, dune.key)[0].read).toBe(false);
    });
});

describe('counts', () => {
    it('counts all books and read books', () => {
        const books = toggleRead(addBook(addBook([], dune), emma), emma.key);
        expect(countBooks(books)).toEqual({ total: 2, read: 1 });
        expect(countsText(books)).toBe('2 books, 1 read');
    });

    it('uses the singular for one book', () => {
        expect(countsText(addBook([], dune))).toBe('1 book, 0 read');
    });
});

describe('searchMessage', () => {
    const idle = { status: 'idle', query: 'dune', results: [], error: '' };

    it('says nothing before a search', () => {
        expect(searchMessage(idle)).toBe('');
    });

    it('says when a search is running', () => {
        const search = { ...idle, status: 'loading' };
        expect(searchMessage(search)).toBe('Searching…');
    });

    it('says when a search failed', () => {
        const search = { ...idle, status: 'error', error: 'HTTP 500' };
        expect(searchMessage(search)).toBe('Search failed: HTTP 500');
    });

    it('says when nothing was found', () => {
        const search = { ...idle, status: 'done' };
        expect(searchMessage(search)).toBe('No books found for "dune".');
    });

    it('counts the results', () => {
        const search = { ...idle, status: 'done', results: [dune] };
        expect(searchMessage(search)).toBe('1 result for "dune".');
    });
});
