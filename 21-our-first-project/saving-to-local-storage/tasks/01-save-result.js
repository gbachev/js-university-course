// Task 1: Did it save?
// Lecture: Saving to localStorage
//
// saveBooks() only logs a warning when the storage fails, so the page cannot tell the
// user. Change it to return true when the list was saved and false when setItem()
// threw (keep the warning). It must still never throw, also when storage is null, the
// way browserStorage() gives it to us when site data is blocked. The list goes in as
// JSON under STORAGE_KEY, as before.
//
// Examples:
//   saveBooks(localStorage, books)   // true
//   saveBooks(null, books)           // false, and a warning in the console
//
// Run the tests: npm test -- 21-our-first-project/saving-to-local-storage

// Copied from reading-list/src/storage.js.
export const STORAGE_KEY = 'reading-list:v1';

export function saveBooks(storage, books) {
    try {
        storage.setItem(STORAGE_KEY, JSON.stringify(books));
    } catch (error) {
        // Storage can be full or switched off. The app keeps working without it.
        console.warn('Could not save the reading list.', error);
    }
}
