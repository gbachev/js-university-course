// Reproducing the bug: a list saved by our imagined version 1.0.0, in its shape,
// and loaded as JSON, the way localStorage keeps it.
const oldBook = {
    key: '/works/OL893414W',
    title: 'Dune',
    author: 'Frank Herbert',
    year: 1965,
    coverId: null,
    read: true,
};
const saved = JSON.stringify([oldBook]);

// isBook() from Saving to localStorage checks only key, title and read.
const isBook = (value) =>
    typeof value === 'object' &&
    value !== null &&
    typeof value.key === 'string' &&
    typeof value.title === 'string' &&
    typeof value.read === 'boolean';

const books = JSON.parse(saved);
console.log(books.every(isBook)); // true

// src/state.js (version 1.1.0)
function addedText(book) {
    const day = new Date(book.addedAt).toISOString().slice(0, 10);
    return `Added ${day}`;
}

try {
    books.map(addedText);
} catch (error) {
    console.log(error.name + ': ' + error.message); // RangeError: Invalid time value
}
