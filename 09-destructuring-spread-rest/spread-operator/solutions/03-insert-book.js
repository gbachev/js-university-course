export function insertBook(readingList, position, book) {
    return [...readingList.slice(0, position), book, ...readingList.slice(position)];
}
