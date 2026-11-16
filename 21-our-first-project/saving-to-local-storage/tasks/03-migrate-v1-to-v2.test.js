import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { migrateBooks, OLD_KEY, NEW_KEY } = await import(
    process.env.SOLUTIONS ? '../solutions/03-migrate-v1-to-v2.js' : './03-migrate-v1-to-v2.js'
);

// A stand-in for localStorage, backed by a plain object we can look into.
function fakeStorage(saved = {}) {
    const data = { ...saved };
    return {
        data,
        getItem: (key) => (key in data ? data[key] : null),
        setItem: (key, value) => {
            data[key] = String(value);
        },
        removeItem: (key) => {
            delete data[key];
        },
    };
}

const v1Books = [
    { key: 'd1', title: 'Dune', author: 'Frank Herbert', read: true },
    { key: 'e1', title: 'Emma', author: 'Jane Austen', read: false },
];
const v2Books = [
    { key: 'd1', title: 'Dune', author: 'Frank Herbert', status: 'done' },
    { key: 'e1', title: 'Emma', author: 'Jane Austen', status: 'to-read' },
];

test('a v1 list comes back with a status instead of read', () => {
    const storage = fakeStorage({ [OLD_KEY]: JSON.stringify(v1Books) });
    assert.deepEqual(migrateBooks(storage), v2Books);
});

test('the migrated list is saved as v2 and v1 is removed', () => {
    const storage = fakeStorage({ [OLD_KEY]: JSON.stringify(v1Books) });
    migrateBooks(storage);
    assert.deepEqual(JSON.parse(storage.data[NEW_KEY]), v2Books);
    assert.equal(OLD_KEY in storage.data, false);
});

test('a saved v2 list is used as it is, and nothing is touched', () => {
    const saved = {
        [OLD_KEY]: JSON.stringify(v1Books),
        [NEW_KEY]: JSON.stringify(v2Books.slice(0, 1)),
    };
    const storage = fakeStorage(saved);
    assert.deepEqual(migrateBooks(storage), v2Books.slice(0, 1));
    assert.deepEqual(storage.data, saved);
});

test('with nothing saved, the list starts empty and nothing is written', () => {
    const storage = fakeStorage();
    assert.deepEqual(migrateBooks(storage), []);
    assert.deepEqual(storage.data, {});
});

test('broken v1 JSON gives an empty list and stays where it is', () => {
    const storage = fakeStorage({ [OLD_KEY]: '{broken' });
    assert.deepEqual(migrateBooks(storage), []);
    assert.deepEqual(storage.data, { [OLD_KEY]: '{broken' });
});

test('running it a second time gives the same books', () => {
    const storage = fakeStorage({ [OLD_KEY]: JSON.stringify(v1Books) });
    migrateBooks(storage);
    assert.deepEqual(migrateBooks(storage), v2Books);
});
