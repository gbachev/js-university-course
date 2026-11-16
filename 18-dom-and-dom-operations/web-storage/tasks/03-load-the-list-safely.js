// Task 3: Load the list safely
// Lecture: Web Storage: localStorage and sessionStorage
//
// Our reading list lives in localStorage under the key "reading-list", as JSON. Fix the
// two functions. loadBooks() must always return an array: an empty one when the key is
// missing, when the value is broken JSON, and when it is valid JSON but not an array.
// saveBooks(books) saves the list and returns true. When the browser refuses to save
// (the store is full and setItem() throws), it returns false instead of throwing.
//
// Examples:
//   loadBooks()                                     // [] on a first visit
//   saveBooks([{ title: 'Dune', read: false }])     // true
//   loadBooks()                                     // [{ title: 'Dune', read: false }]
//
// Open the page: run npm run serve, then open
//   18-dom-and-dom-operations/web-storage/tasks/03-load-the-list-safely.html

const STORAGE_KEY = 'reading-list';

export function loadBooks() {
    return JSON.parse(localStorage.getItem(STORAGE_KEY));
}

export function saveBooks(books) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(books));
    return true;
}
