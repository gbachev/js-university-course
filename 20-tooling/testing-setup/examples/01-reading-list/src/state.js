// src/state.js
export function addBook(books, book) {
    if (books.some((item) => item.key === book.key)) {
        return books;
    }
    return [...books, { ...book, read: false }];
}

export function removeBook(books, key) {
    return books.filter((book) => book.key !== key);
}
