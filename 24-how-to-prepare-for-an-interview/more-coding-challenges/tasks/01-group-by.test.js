import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { groupBy } = await import(
    process.env.SOLUTIONS ? '../solutions/01-group-by.js' : './01-group-by.js'
);

const books = [
    { title: 'Dune', genre: 'sci-fi', price: 12 },
    { title: 'Emma', genre: 'classic', price: 9 },
    { title: 'Neuromancer', genre: 'sci-fi', price: 15 },
    { title: 'Dracula', genre: 'horror', price: 8 },
];

test('books are grouped by their genre', () => {
    assert.deepEqual(groupBy(books, (book) => book.genre), {
        'sci-fi': [books[0], books[2]],
        classic: [books[1]],
        horror: [books[3]],
    });
});

test('the key can be computed from the item', () => {
    const groups = groupBy(books, (book) => (book.price >= 10 ? 'over 10' : 'under 10'));
    assert.deepEqual(groups['over 10'].map((book) => book.title), ['Dune', 'Neuromancer']);
    assert.deepEqual(groups['under 10'].map((book) => book.title), ['Emma', 'Dracula']);
});

test('items keep the order they came in', () => {
    const groups = groupBy(['Dune', 'Emma', 'Dracula', 'Eragon'], (title) => title[0]);
    assert.deepEqual(groups, { D: ['Dune', 'Dracula'], E: ['Emma', 'Eragon'] });
});

test('an empty list gives an empty object', () => {
    assert.deepEqual(groupBy([], (book) => book.genre), {});
});

test('the items themselves are not copied or changed', () => {
    const groups = groupBy(books, (book) => book.genre);
    assert.equal(groups['sci-fi'][0], books[0]);
    assert.equal(books.length, 4);
});
