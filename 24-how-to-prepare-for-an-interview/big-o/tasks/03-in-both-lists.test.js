import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { inBothLists } = await import(
    process.env.SOLUTIONS ? '../solutions/03-in-both-lists.js' : './03-in-both-lists.js'
);

test('keeps the wishlist titles that are in stock, in wishlist order', () => {
    const wishlist = ['Dune', 'Emma', 'Ulysses'];
    const inStock = ['Emma', 'Beloved', 'Dune'];
    assert.deepEqual(inBothLists(wishlist, inStock), ['Dune', 'Emma']);
});

test('nothing in common gives an empty list', () => {
    assert.deepEqual(inBothLists(['Dune', 'Emma'], ['Beloved']), []);
});

test('an empty wishlist or an empty stock gives an empty list', () => {
    assert.deepEqual(inBothLists([], ['Emma']), []);
    assert.deepEqual(inBothLists(['Emma'], []), []);
});

test('a title repeated on the wishlist stays repeated', () => {
    assert.deepEqual(inBothLists(['Emma', 'Dune', 'Emma'], ['Emma']), ['Emma', 'Emma']);
});

test('titles are compared exactly', () => {
    assert.deepEqual(inBothLists(['dune', 'Emma'], ['Dune', 'Emma']), ['Emma']);
});

test('neither list is changed', () => {
    const wishlist = ['Dune', 'Emma'];
    const inStock = ['Emma'];
    inBothLists(wishlist, inStock);
    assert.deepEqual(wishlist, ['Dune', 'Emma']);
    assert.deepEqual(inStock, ['Emma']);
});

test('two lists of 50,000 titles take less than 250 ms', () => {
    const wishlist = Array.from({ length: 50000 }, (_, i) => `Book ${i}`);
    const inStock = Array.from({ length: 50000 }, (_, i) => `Book ${i + 49998}`);
    const start = performance.now();
    const result = inBothLists(wishlist, inStock);
    const ms = performance.now() - start;
    assert.deepEqual(result, ['Book 49998', 'Book 49999']);
    assert.ok(ms < 250, `took ${Math.round(ms)} ms`);
});
