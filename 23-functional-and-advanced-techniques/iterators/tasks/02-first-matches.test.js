import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { firstMatches } = await import(
    process.env.SOLUTIONS ? '../solutions/02-first-matches.js' : './02-first-matches.js'
);

const books = Array.from({ length: 1000 }, (_, i) => ({
    title: `Book ${i}`,
    inStock: i % 3 === 0,
}));

test('returns the first count matches in order', () => {
    const titles = firstMatches(books, (book) => book.inStock, 3).map((book) => book.title);
    assert.deepEqual(titles, ['Book 0', 'Book 3', 'Book 6']);
});

test('works with numbers too', () => {
    assert.deepEqual(firstMatches([5, 12, 8, 30], (n) => n > 10, 1), [12]);
});

test('stops testing once it has enough matches', () => {
    let checks = 0;
    firstMatches(books, (book) => {
        checks++;
        return book.inStock;
    }, 3);
    assert.equal(checks, 7);
});

test('with fewer matches, returns all of them', () => {
    assert.deepEqual(firstMatches([5, 12, 8, 30], (n) => n > 10, 5), [12, 30]);
    assert.deepEqual(firstMatches([], (n) => n > 10, 2), []);
});

test('a count of 0 gives an empty array', () => {
    assert.deepEqual(firstMatches([5, 12], (n) => n > 0, 0), []);
});
