export const countBooks = (books) => ({
    total: books.length,
    read: books.filter((book) => book.read).length,
});

const plural = (count, word) => `${count} ${word}${count === 1 ? '' : 's'}`;

export function countsText(books) {
    const { total, read } = countBooks(books);
    if (total === 0) {
        return 'No books yet';
    }
    if (total > 1 && read === total) {
        return `All ${total} books read`;
    }
    return `${plural(total, 'book')}, ${read} read`;
}
