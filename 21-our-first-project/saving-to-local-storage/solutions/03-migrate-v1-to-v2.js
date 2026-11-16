export const OLD_KEY = 'reading-list:v1';
export const NEW_KEY = 'reading-list:v2';

// JSON.parse() that gives null instead of throwing on broken text.
function readJson(storage, key) {
    try {
        return JSON.parse(storage.getItem(key));
    } catch {
        return null;
    }
}

export function migrateBooks(storage) {
    const current = readJson(storage, NEW_KEY);
    if (Array.isArray(current)) {
        return current;
    }

    const old = readJson(storage, OLD_KEY);
    if (!Array.isArray(old)) {
        return [];
    }

    const books = old.map(({ read, ...book }) => ({
        ...book,
        status: read ? 'done' : 'to-read',
    }));
    storage.setItem(NEW_KEY, JSON.stringify(books));
    storage.removeItem(OLD_KEY);
    return books;
}
