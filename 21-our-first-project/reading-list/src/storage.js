// Bump the version when the saved shape changes, so old data is not misread.
export const STORAGE_KEY = 'reading-list:v1';

const isBook = (value) =>
    typeof value === 'object' &&
    value !== null &&
    typeof value.key === 'string' &&
    typeof value.title === 'string' &&
    typeof value.read === 'boolean';

// The storage comes in as a parameter: the app passes localStorage,
// the tests pass a plain object with the same two methods.
export function loadBooks(storage) {
    try {
        const books = JSON.parse(storage.getItem(STORAGE_KEY));
        return Array.isArray(books) && books.every(isBook) ? books : [];
    } catch {
        // Bad JSON, or storage the browser will not let us read.
        return [];
    }
}

export function saveBooks(storage, books) {
    try {
        storage.setItem(STORAGE_KEY, JSON.stringify(books));
    } catch (error) {
        // Storage can be full or switched off. The app keeps working without it.
        console.warn('Could not save the reading list.', error);
    }
}

// Even reading window.localStorage throws when the browser blocks site
// data, so main.js asks for it here and gets null instead of an error.
// loadBooks and saveBooks then fall back to their catch blocks.
export function browserStorage() {
    try {
        return window.localStorage;
    } catch {
        return null;
    }
}
