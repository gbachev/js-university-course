// @ts-check

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
    // After the check the year is a number.
    const year = book.year === null ? 'year unknown' : book.year.toString();
    return `${book.title}, ${book.author} (${year})`;
}
