export function addTag(books, key, tag) {
    const book = books.find((item) => item.key === key);
    // An unknown book or a tag it already has: nothing changed, so the same array.
    if (!book || book.tags.includes(tag)) {
        return books;
    }
    return books.map((item) =>
        item === book ? { ...item, tags: [...item.tags, tag] } : item,
    );
}
