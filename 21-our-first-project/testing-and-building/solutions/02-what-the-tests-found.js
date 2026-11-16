export const hasBook = (books, key) => books.some((book) => book.key === key);

export function addBook(books, book) {
    if (hasBook(books, book.key)) {
        return books;
    }
    return [...books, { ...book, read: false }];
}

export const toggleRead = (books, key) =>
    books.map((book) => (book.key === key ? { ...book, read: !book.read } : book));
