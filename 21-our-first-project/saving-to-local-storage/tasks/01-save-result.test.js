import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { saveBooks, STORAGE_KEY } = await import(
    process.env.SOLUTIONS ? '../solutions/01-save-result.js' : './01-save-result.js'
);

const books = [{ key: '/works/OL893414W', title: 'Dune', read: true }];

// A stand-in for localStorage that keeps what we save in a plain object.
function fakeStorage() {
    const data = {};
    return {
        data,
        getItem: (key) => (key in data ? data[key] : null),
        setItem: (key, value) => {
            data[key] = String(value);
        },
    };
}

// A storage like a full one: every setItem() throws.
const fullStorage = {
    setItem: () => {
        throw new Error('QuotaExceededError');
    },
};

test('a successful save returns true and stores the list as JSON', () => {
    const storage = fakeStorage();
    assert.equal(saveBooks(storage, books), true);
    assert.equal(storage.data[STORAGE_KEY], JSON.stringify(books));
});

test('a full storage returns false and logs a warning', (t) => {
    const warn = t.mock.method(console, 'warn', () => {});
    assert.equal(saveBooks(fullStorage, books), false);
    assert.equal(warn.mock.callCount(), 1);
});

test('no storage at all returns false instead of throwing', (t) => {
    t.mock.method(console, 'warn', () => {});
    assert.equal(saveBooks(null, books), false);
});

test('an empty list is saved too', () => {
    const storage = fakeStorage();
    assert.equal(saveBooks(storage, []), true);
    assert.equal(storage.data[STORAGE_KEY], '[]');
});
