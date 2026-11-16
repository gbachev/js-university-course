import { expect, test } from 'vitest';
import { createBook } from '../src/books.js';

test('a new book is unread', () => {
    expect(createBook('Dune').read).toBe(false);
});
