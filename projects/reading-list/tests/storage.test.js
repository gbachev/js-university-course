import { describe, expect, it } from 'vitest';
import {
    browserStorage,
    loadBooks,
    saveBooks,
    STORAGE_KEY,
} from '../src/storage.js';

// A stand-in for localStorage: same two methods, backed by a plain object.
function fakeStorage(saved = {}) {
    const data = { ...saved };
    return {
        getItem: (key) => (key in data ? data[key] : null),
        setItem: (key, value) => {
            data[key] = String(value);
        },
    };
}

const books = [{ key: '/works/OL893414W', title: 'Dune', read: true }];

describe('loadBooks', () => {
    it('starts empty when nothing is saved', () => {
        expect(loadBooks(fakeStorage())).toEqual([]);
    });

    it('reads back what saveBooks wrote', () => {
        const storage = fakeStorage();
        saveBooks(storage, books);
        expect(loadBooks(storage)).toEqual(books);
    });

    it('starts empty when the saved text is not valid JSON', () => {
        const storage = fakeStorage({ [STORAGE_KEY]: '{not json' });
        expect(loadBooks(storage)).toEqual([]);
    });

    it('starts empty when the saved data has the wrong shape', () => {
        const storage = fakeStorage({ [STORAGE_KEY]: '{"title":"Dune"}' });
        expect(loadBooks(storage)).toEqual([]);
        storage.setItem(STORAGE_KEY, '[{"title":"Dune"}]');
        expect(loadBooks(storage)).toEqual([]);
    });

    it('starts empty when the storage cannot be read', () => {
        const storage = {
            getItem: () => {
                throw new Error('Access denied');
            },
        };
        expect(loadBooks(storage)).toEqual([]);
    });
});

describe('browserStorage', () => {
    it('gives null when there is no localStorage to read', () => {
        // Node has no window, like a browser that blocks site data.
        expect(browserStorage()).toBe(null);
    });
});
