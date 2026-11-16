// A small test, so that npm test and npm run check have something to run.
import { expect, test } from 'vitest';
import { createBook } from '../src/books.js';

test('a new book is unread and has an id', () => {
    const book = createBook('Emma');

    expect(book.title).toBe('Emma');
    expect(book.read).toBe(false);
    expect(book.id).toHaveLength(21);
});
