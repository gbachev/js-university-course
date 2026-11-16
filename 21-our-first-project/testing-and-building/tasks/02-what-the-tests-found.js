// Task 2: What the tests found
// Lecture: Testing and Building
//
// Someone "optimized" state.js: addBook() now pushes into the array, and toggleRead()
// flips read on the book itself. The app still seems to work, but the tests below,
// like the project's "does not change the list it receives", now fail. Fix both
// functions so they return new data again and every test passes. Do not change the
// tests.
//
// Examples:
//   const before = [];
//   const after = addBook(before, dune);
//   before.length   // 0
//   after.length    // 1
//
// Run the tests: npm test -- 21-our-first-project/testing-and-building

// Based on reading-list/src/state.js, with the bugs.
export const hasBook = (books, key) => books.some((book) => book.key === key);

export function addBook(books, book) {
    if (hasBook(books, book.key)) {
        return books;
    }
    books.push({ ...book, read: false });
    return books;
}

export function toggleRead(books, key) {
    const book = books.find((item) => item.key === key);
    if (book) {
        book.read = !book.read;
    }
    return books;
}
