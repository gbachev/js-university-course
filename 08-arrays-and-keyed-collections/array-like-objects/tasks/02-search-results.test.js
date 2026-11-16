import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { getTitles } = await import(
    process.env.SOLUTIONS ? '../solutions/02-search-results.js' : './02-search-results.js'
);

test('the titles of an array-like result come back as an array', () => {
    const titles = getTitles({ 0: 'Dune', 1: 'Emma', length: 2 });
    assert.equal(Array.isArray(titles), true);
    assert.deepEqual(titles, ['Dune', 'Emma']);
});

test('the spaces around every title are removed', () => {
    assert.deepEqual(getTitles({ 0: ' Dune ', 1: 'Emma  ', length: 2 }), ['Dune', 'Emma']);
});

test('the spaces inside a title stay', () => {
    assert.deepEqual(getTitles({ 0: '  The Hobbit ', length: 1 }), ['The Hobbit']);
});

test('no results give an empty array', () => {
    assert.deepEqual(getTitles({ length: 0 }), []);
});
