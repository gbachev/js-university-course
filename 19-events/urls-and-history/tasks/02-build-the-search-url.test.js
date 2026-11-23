import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { buildSearchUrl } = await import(
    process.env.SOLUTIONS
        ? '../solutions/02-build-the-search-url.js'
        : './02-build-the-search-url.js'
);

const base = 'https://books.example.com/search';

test('the fields become query parameters, in order', () => {
    assert.equal(buildSearchUrl(base, { q: 'dune', page: 2 }), `${base}?q=dune&page=2`);
});

test('spaces and & are encoded', () => {
    assert.equal(buildSearchUrl(base, { q: 'rock & roll' }), `${base}?q=rock+%26+roll`);
});

test('empty, null and undefined fields are left out', () => {
    assert.equal(
        buildSearchUrl(base, { q: 'emma', sort: '', author: null, year: undefined }),
        `${base}?q=emma`
    );
});

test('no fields left means no question mark', () => {
    assert.equal(buildSearchUrl(base, { q: '' }), base);
    assert.equal(buildSearchUrl(base, {}), base);
});

test('the result is a string', () => {
    assert.equal(typeof buildSearchUrl(base, { q: 'dune' }), 'string');
});
