// @ts-check

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
 * @returns {value is number | null}
 */
function isNumberOrNull(value) {
    return value === null || typeof value === 'number';
}

/**
 * @param {unknown} value
 * @returns {value is Book}
 */
export function isBook(value) {
    return (
        typeof value === 'object' &&
        value !== null &&
        !Array.isArray(value) &&
        'key' in value &&
        typeof value.key === 'string' &&
        'title' in value &&
        typeof value.title === 'string' &&
        'author' in value &&
        typeof value.author === 'string' &&
        'year' in value &&
        isNumberOrNull(value.year) &&
        'coverId' in value &&
        isNumberOrNull(value.coverId) &&
        'read' in value &&
        typeof value.read === 'boolean'
    );
}
