export function sortBooks(books, field) {
    if (field === 'title') {
        return books.toSorted((a, b) => a.title.localeCompare(b.title));
    }
    if (field === 'year') {
        return books.toSorted((a, b) => a.year - b.year);
    }
    throw new Error(`Cannot sort by ${field}`);
}
