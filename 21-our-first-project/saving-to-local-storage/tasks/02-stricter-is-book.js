// Task 2: A stricter shape check
// Lecture: Saving to localStorage
//
// isBook() checks only key, title and read. A saved book with year: '1965' or
// author: 42 passes it, and the page then shows odd text. Make isBook(value) check
// all six properties of a book: key, title and author are strings, read is a boolean,
// and year and coverId are each a number or null. Anything else, including null, an
// array or a book with a property missing, is not a book.
//
// Examples:
//   isBook({ key: 'd1', title: 'Dune', author: 'Frank Herbert',
//            year: 1965, coverId: null, read: false })   // true
//   isBook({ key: 'd1', title: 'Dune', read: false })    // false: author, year, coverId
//
// Run the tests: npm test -- 21-our-first-project/saving-to-local-storage

// Copied from reading-list/src/storage.js, with export added for the tests.
export const isBook = (value) =>
    typeof value === 'object' &&
    value !== null &&
    typeof value.key === 'string' &&
    typeof value.title === 'string' &&
    typeof value.read === 'boolean';
