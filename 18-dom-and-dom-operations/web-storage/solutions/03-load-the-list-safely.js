const STORAGE_KEY = 'reading-list';

export function loadBooks() {
    try {
        const books = JSON.parse(localStorage.getItem(STORAGE_KEY));
        return Array.isArray(books) ? books : [];
    } catch {
        return [];
    }
}

export function saveBooks(books) {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(books));
        return true;
    } catch {
        return false;
    }
}
