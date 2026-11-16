// Load with a default and a try...catch: the key may be missing or the value broken.
const STORAGE_KEY = 'reading-list';
localStorage.removeItem(STORAGE_KEY); // start like a first visit

function loadBooks() {
    try {
        const books = JSON.parse(localStorage.getItem(STORAGE_KEY));
        return Array.isArray(books) ? books : [];
    } catch {
        return [];
    }
}

function saveBooks(books) {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(books));
    } catch (error) {
        console.warn('Could not save the list:', error.name);
    }
}

console.log(loadBooks().length); // 0

saveBooks([{ title: 'Dune', read: false }]);
console.log(loadBooks()[0].title); // Dune

localStorage.setItem(STORAGE_KEY, '{broken');
console.log(loadBooks().length); // 0
