import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { resolveConflict } = await import(
    process.env.SOLUTIONS ? '../solutions/01-resolve-conflict.js' : './01-resolve-conflict.js'
);

const booksFile = [
    '<<<<<<< HEAD',
    'export const PAGE_SIZE = 25;',
    '=======',
    'export const PAGE_SIZE = 20;',
    '>>>>>>> bigger-pages',
    '',
    "export const books = [{ title: 'Dune', read: true }];",
    '',
].join('\n');

test('ours keeps the HEAD version and the rest of the file', () => {
    assert.equal(
        resolveConflict(booksFile, 'ours'),
        "export const PAGE_SIZE = 25;\n\nexport const books = [{ title: 'Dune', read: true }];\n",
    );
});

test('theirs keeps the incoming version and the rest of the file', () => {
    assert.equal(
        resolveConflict(booksFile, 'theirs'),
        "export const PAGE_SIZE = 20;\n\nexport const books = [{ title: 'Dune', read: true }];\n",
    );
});

test('a version can have several lines', () => {
    const text = 'a\n<<<<<<< HEAD\nb\nc\n=======\nd\n>>>>>>> other\ne';
    assert.equal(resolveConflict(text, 'ours'), 'a\nb\nc\ne');
    assert.equal(resolveConflict(text, 'theirs'), 'a\nd\ne');
});

test('every conflict in the file is resolved', () => {
    const text = [
        '<<<<<<< HEAD',
        'const PAGE_SIZE = 25;',
        '=======',
        'const PAGE_SIZE = 20;',
        '>>>>>>> bigger-pages',
        'const SORT = "title";',
        '<<<<<<< HEAD',
        'const THEME = "dark";',
        '=======',
        'const THEME = "light";',
        '>>>>>>> bigger-pages',
    ].join('\n');
    assert.equal(
        resolveConflict(text, 'theirs'),
        'const PAGE_SIZE = 20;\nconst SORT = "title";\nconst THEME = "light";',
    );
});

test('a file without a conflict stays the same', () => {
    const text = 'export const PAGE_SIZE = 20;\n';
    assert.equal(resolveConflict(text, 'ours'), text);
});
