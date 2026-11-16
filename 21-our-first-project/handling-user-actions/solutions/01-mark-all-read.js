export function markAllRead(books) {
    if (books.every((book) => book.read)) {
        return books;
    }
    return books.map((book) => (book.read ? book : { ...book, read: true }));
}
