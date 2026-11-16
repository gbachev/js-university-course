export function visibleBooks(books, filter) {
    if (filter === 'all') {
        return [...books];
    }
    if (filter === 'read' || filter === 'unread') {
        const wanted = filter === 'read';
        return books.filter((book) => book.read === wanted);
    }
    throw new Error(`Unknown filter: ${filter}`);
}
