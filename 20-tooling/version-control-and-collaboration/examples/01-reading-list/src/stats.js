// Counts the books we have read. ESLint stops this file at the commit.
export function countRead(books) {
    return books.filter((book) => book.read == true).length;
}
