// @ts-check
// Task 2: Is it a book?
// Lecture: TypeScript for JavaScript Developers
//
// Data from a server or from JSON.parse() is unknown: the types end where the
// program starts. Write isBook(value), a type guard: it returns true only when value
// is an object (not null, not an array) with a string key, title and author, a year
// and a coverId that are each a number or null, and a boolean read. Anything else,
// such as a year saved as the string '1965' or a missing read, gives false.
// The JSDoc @returns {value is Book} tells the checker that after
// if (isBook(value)) the value is a Book.
//
// Examples:
//   isBook({ key: '/works/OL66562W', title: 'Emma', author: 'Jane Austen',
//            year: null, coverId: null, read: false })   // true
//   isBook({ title: 'Emma', author: 'Jane Austen' })    // false
//   isBook(null)                                        // false
//
// Run the tests: npm test -- 20-tooling/typescript

/**
 * @typedef {object} Book
 * @property {string} key
 * @property {string} title
 * @property {string} author
 * @property {number | null} year
 * @property {number | null} coverId
 * @property {boolean} read
 */

/**
 * @param {unknown} value
 * @returns {value is Book}
 */
export function isBook(value) {
    // Your code here
    return false;
}
