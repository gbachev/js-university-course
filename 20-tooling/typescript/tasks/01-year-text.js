// @ts-check
// Task 1: Possibly null
// Lecture: TypeScript for JavaScript Developers
//
// bookLine(book) returns one line for the reading list: the title, the author and
// the year in parentheses. Its year is a number | null, and the editor reports
// 'book.year' is possibly 'null'. The checker is right: for a book with no year
// the function throws a TypeError. Fix it by narrowing the year: when it is null,
// the line ends with (year unknown) instead.
//
// Examples:
//   bookLine({ title: 'Dune', author: 'Frank Herbert', year: 1965, read: true })
//   // 'Dune, Frank Herbert (1965)'
//   bookLine({ title: 'Emma', author: 'Jane Austen', year: null, read: false })
//   // 'Emma, Jane Austen (year unknown)'
//
// Run the tests: npm test -- 20-tooling/typescript

/**
 * @typedef {object} Book
 * @property {string} title
 * @property {string} author
 * @property {number | null} year
 * @property {boolean} read
 */

/**
 * @param {Book} book
 * @returns {string}
 */
export function bookLine(book) {
    return `${book.title}, ${book.author} (${book.year.toString()})`;
}
