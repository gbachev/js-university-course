// hasBook() is copied from reading-list/src/state.js.
const hasBook = (books, key) => books.some((book) => book.key === key);

export function updateBook(books, key, changes) {
    if (!hasBook(books, key)) {
        return books;
    }
    // key goes last, so a key in changes cannot replace it.
    return books.map((book) => (book.key === key ? { ...book, ...changes, key } : book));
}
