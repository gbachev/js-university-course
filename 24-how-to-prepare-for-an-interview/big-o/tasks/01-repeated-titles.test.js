import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { repeatedTitles } = await import(
    process.env.SOLUTIONS ? '../solutions/01-repeated-titles.js' : './01-repeated-titles.js'
);

test('every repeated title is listed once, in the order its first repeat appears', () => {
    const titles = ['Dune', 'Emma', 'Ulysses', 'Emma', 'Dune', 'Emma'];
    assert.deepEqual(repeatedTitles(titles), ['Emma', 'Dune']);
});

test('a list with no repeats gives an empty list', () => {
    assert.deepEqual(repeatedTitles(['Dune', 'Emma', 'Ulysses']), []);
});

test('an empty list gives an empty list', () => {
    assert.deepEqual(repeatedTitles([]), []);
});

test('titles are compared exactly, so a different case is a different title', () => {
    assert.deepEqual(repeatedTitles(['Dune', 'dune', 'DUNE']), []);
});

test('the list we pass in is not changed', () => {
    const titles = ['Emma', 'Dune', 'Emma'];
    repeatedTitles(titles);
    assert.deepEqual(titles, ['Emma', 'Dune', 'Emma']);
});

test('a list of 50,000 titles takes less than 250 ms', () => {
    const titles = Array.from({ length: 50000 }, (_, i) => `Book ${i}`);
    titles.push('Book 7');
    const start = performance.now();
    const result = repeatedTitles(titles);
    const ms = performance.now() - start;
    assert.deepEqual(result, ['Book 7']);
    assert.ok(ms < 250, `took ${Math.round(ms)} ms`);
});
