export function addedText(book) {
    // Books saved by version 1.0.0 have no addedAt.
    if (book.addedAt === undefined) {
        return '';
    }
    const day = new Date(book.addedAt).toISOString().slice(0, 10);
    return `Added ${day}`;
}
