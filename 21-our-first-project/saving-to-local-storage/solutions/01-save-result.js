export const STORAGE_KEY = 'reading-list:v1';

export function saveBooks(storage, books) {
    try {
        storage.setItem(STORAGE_KEY, JSON.stringify(books));
        return true;
    } catch (error) {
        // Storage can be full or switched off. The app keeps working without it.
        console.warn('Could not save the reading list.', error);
        return false;
    }
}
