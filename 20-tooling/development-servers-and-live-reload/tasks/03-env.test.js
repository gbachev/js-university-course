import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { exposedEnv } = await import(
    process.env.SOLUTIONS ? '../solutions/03-env.js' : './03-env.js'
);

test('VITE_ names are exposed, other names are not', () => {
    const text = 'VITE_COVERS_URL=https://covers.openlibrary.org\nDB_HOST=localhost\n';
    assert.deepEqual(
        exposedEnv(text),
        { VITE_COVERS_URL: 'https://covers.openlibrary.org' },
    );
});

test('a file without VITE_ names exposes nothing', () => {
    assert.deepEqual(exposedEnv('DB_HOST=localhost\nDB_NAME=books\n'), {});
    assert.deepEqual(exposedEnv(''), {});
});

test('comments, empty lines and spaces around a line are skipped', () => {
    const text =
        '# Covers\n\n   VITE_COVERS_URL=https://covers.openlibrary.org   \n\n# VITE_OLD=1\n';
    assert.deepEqual(
        exposedEnv(text),
        { VITE_COVERS_URL: 'https://covers.openlibrary.org' },
    );
});

test('a value can contain an equals sign', () => {
    const text = 'VITE_SEARCH_URL=https://openlibrary.org/search.json?limit=10';
    assert.deepEqual(exposedEnv(text), {
        VITE_SEARCH_URL: 'https://openlibrary.org/search.json?limit=10',
    });
});

test('the name must start with VITE_', () => {
    assert.deepEqual(
        exposedEnv('MY_VITE_PAGE=1\nVITE_PAGE_SIZE=20'),
        { VITE_PAGE_SIZE: '20' },
    );
});

test('the last line with the same name wins', () => {
    assert.deepEqual(
        exposedEnv('VITE_PAGE_SIZE=20\nVITE_PAGE_SIZE=25'),
        { VITE_PAGE_SIZE: '25' },
    );
});
