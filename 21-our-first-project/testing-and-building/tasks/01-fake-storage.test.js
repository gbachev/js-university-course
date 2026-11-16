import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { fakeStorage } = await import(
    process.env.SOLUTIONS ? '../solutions/01-fake-storage.js' : './01-fake-storage.js'
);

const KEY = 'reading-list:v1';

test('a missing key gives null', () => {
    assert.equal(fakeStorage().getItem(KEY), null);
});

test('values are stored as strings', () => {
    const storage = fakeStorage();
    storage.setItem('count', 5);
    assert.equal(storage.getItem('count'), '5');
});

test('removeItem() removes one key', () => {
    const storage = fakeStorage({ [KEY]: '[]', theme: 'dark' });
    storage.removeItem(KEY);
    assert.equal(storage.getItem(KEY), null);
    assert.equal(storage.getItem('theme'), 'dark');
});

test('clear() removes every key', () => {
    const storage = fakeStorage({ [KEY]: '[]', theme: 'dark' });
    storage.clear();
    assert.equal(storage.getItem(KEY), null);
    assert.equal(storage.getItem('theme'), null);
});

test('length counts the keys as they change', () => {
    const storage = fakeStorage({ [KEY]: '[]' });
    assert.equal(storage.length, 1);
    storage.setItem('theme', 'dark');
    assert.equal(storage.length, 2);
    storage.removeItem(KEY);
    assert.equal(storage.length, 1);
    storage.clear();
    assert.equal(storage.length, 0);
});

test('the saved object we pass in never changes', () => {
    const saved = { [KEY]: '[]' };
    const storage = fakeStorage(saved);
    storage.setItem('theme', 'dark');
    storage.removeItem(KEY);
    assert.deepEqual(saved, { [KEY]: '[]' });
});
