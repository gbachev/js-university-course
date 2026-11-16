export function sortByTitle(books) {
    return books.toSorted((a, b) => a.title.localeCompare(b.title));
}

export function newestFirst(books) {
    return books.toReversed();
}

export function removeBook(books, index) {
    return books.toSpliced(index, 1);
}

export function replaceBook(books, index, book) {
    return books.with(index, book);
}
