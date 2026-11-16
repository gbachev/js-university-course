// Task 1: A friendlier counts line
// Lecture: Rendering the List
//
// countsText(books) writes the line under "My list". Below is the app's version, so
// it already gives '1 book, 0 read' and '2 books, 1 read'. Change countsText() for
// two more cases: an empty list gives 'No books yet' instead of '0 books, 0 read', and
// a list of two or more books that are all read gives 'All 3 books read'. A list of
// one read book still gives '1 book, 1 read'.
//
// Examples:
//   countsText([])                                     // 'No books yet'
//   countsText([{ read: true }, { read: false }])      // '2 books, 1 read'
//   countsText([{ read: true }, { read: true }])       // 'All 2 books read'
//
// Run the tests: npm test -- 21-our-first-project/rendering-the-list

// Copied from reading-list/src/state.js.
export const countBooks = (books) => ({
    total: books.length,
    read: books.filter((book) => book.read).length,
});

const plural = (count, word) => `${count} ${word}${count === 1 ? '' : 's'}`;

export function countsText(books) {
    const { total, read } = countBooks(books);
    return `${plural(total, 'book')}, ${read} read`;
}
