// Pure functions: each one takes the current data and returns new data.
// None of them change what they receive, so they are easy to test.

export const hasBook = (books, key) => books.some((book) => book.key === key);

export function addBook(books, book) {
    if (hasBook(books, book.key)) {
        return books;
    }
    return [...books, { ...book, read: false }];
}

export const removeBook = (books, key) =>
    books.filter((book) => book.key !== key);

export const toggleRead = (books, key) =>
    books.map((book) =>
        book.key === key ? { ...book, read: !book.read } : book,
    );

export const countBooks = (books) => ({
    total: books.length,
    read: books.filter((book) => book.read).length,
});

const plural = (count, word) => `${count} ${word}${count === 1 ? '' : 's'}`;

export function countsText(books) {
    const { total, read } = countBooks(books);
    return `${plural(total, 'book')}, ${read} read`;
}

export function searchMessage({ status, query, results, error }) {
    if (status === 'loading') {
        return 'Searching…';
    }
    if (status === 'error') {
        return `Search failed: ${error}`;
    }
    if (status === 'done' && results.length === 0) {
        return `No books found for "${query}".`;
    }
    if (status === 'done') {
        return `${plural(results.length, 'result')} for "${query}".`;
    }
    return '';
}
