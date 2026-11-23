import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { readFilters } = await import(
    process.env.SOLUTIONS ? '../solutions/01-read-the-filters.js' : './01-read-the-filters.js'
);

const base = 'https://books.example.com/search';

test('all the filters are read', () => {
    assert.deepEqual(readFilters(`${base}?q=dune&page=2&tag=sci-fi&tag=classic`), {
        query: 'dune',
        page: 2,
        tags: ['sci-fi', 'classic'],
    });
});

test('no filters give the defaults', () => {
    assert.deepEqual(readFilters(base), { query: '', page: 1, tags: [] });
});

test('the query is decoded', () => {
    assert.equal(readFilters(`${base}?q=pride+%26+prejudice`).query, 'pride & prejudice');
});

test('a page that is not a whole number above 0 becomes 1', () => {
    assert.equal(readFilters(`${base}?page=abc`).page, 1);
    assert.equal(readFilters(`${base}?page=0`).page, 1);
    assert.equal(readFilters(`${base}?page=2.5`).page, 1);
});

test('the page is a number, not a string', () => {
    assert.equal(typeof readFilters(`${base}?page=3`).page, 'number');
});
