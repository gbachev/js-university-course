// @ts-check

/**
 * @typedef {object} Book
 * @property {string} title
 * @property {number | null} year
 * @property {boolean} read
 */

/**
 * @param {Book[]} books
 * @returns {number}
 */
function countRead(books) {
    return books.filter((book) => book.read).length;
}

const dune = { title: 'Dune', year: 1965, read: true };
console.log(countRead([dune])); // 1

// Delete the @ts-expect-error line and npm run typecheck reports:
// Error: Type 'string' is not assignable to type 'number'.
// @ts-expect-error The year is a string.
countRead([{ title: 'Emma', year: '1815', read: false }]);
