import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { searchUrl } = await import(
    process.env.SOLUTIONS ? '../solutions/01-search-url.js' : './01-search-url.js'
);

const FIELDS = 'fields=key%2Ctitle%2Cauthor_name%2Cfirst_publish_year%2Ccover_i';

test('the first page has no page parameter', () => {
    assert.equal(
        searchUrl('dune'),
        `https://openlibrary.org/search.json?q=dune&limit=10&${FIELDS}`,
    );
});

test('page 1 given on purpose also has no page parameter', () => {
    assert.equal(searchUrl('dune', 1), searchUrl('dune'));
});

test('a later page goes at the end', () => {
    assert.equal(
        searchUrl('dune', 3),
        `https://openlibrary.org/search.json?q=dune&limit=10&${FIELDS}&page=3`,
    );
});

test('the query is trimmed and encoded', () => {
    const url = new URL(searchUrl('  lord of the rings & more ', 2));
    assert.equal(url.searchParams.get('q'), 'lord of the rings & more');
    assert.equal(url.searchParams.get('page'), '2');
    assert.ok(url.search.startsWith('?q=lord+of+the+rings+%26+more&limit=10'));
});

test('a page below 1 throws a RangeError', () => {
    assert.throws(() => searchUrl('dune', 0), {
        name: 'RangeError',
        message: 'page must be a whole number from 1',
    });
});

test('a page that is not a whole number throws a RangeError', () => {
    assert.throws(() => searchUrl('dune', 1.5), { name: 'RangeError' });
    assert.throws(() => searchUrl('dune', '2'), { name: 'RangeError' });
});
