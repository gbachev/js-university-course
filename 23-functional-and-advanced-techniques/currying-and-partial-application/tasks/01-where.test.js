import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { where } = await import(
    process.env.SOLUTIONS ? '../solutions/01-where.js' : './01-where.js'
);

const books = [
    { title: 'Dune', author: 'Frank Herbert', year: 1965 },
    { title: 'Emma', author: 'Jane Austen', year: 1815 },
    { title: 'Persuasion', author: 'Jane Austen', year: 1817 },
    { title: 'Notes' },
];

test('each step takes one argument and returns the next function', () => {
    assert.equal(typeof where('author'), 'function');
    assert.equal(typeof where('author')('Jane Austen'), 'function');
});

test('the test matches an item whose field equals the value', () => {
    const byJane = where('author')('Jane Austen');
    assert.equal(byJane(books[1]), true);
    assert.equal(byJane(books[0]), false);
});

test('works inside filter()', () => {
    const janes = books.filter(where('author')('Jane Austen'));
    const titles = janes.map((book) => book.title);
    assert.deepEqual(titles, ['Emma', 'Persuasion']);
});

test('compares strictly, so a number and the same number as a string do not match', () => {
    assert.deepEqual(books.filter(where('year')(1965)), [books[0]]);
    assert.deepEqual(books.filter(where('year')('1965')), []);
});

test('an item without the field does not match', () => {
    assert.equal(where('author')('Jane Austen')(books[3]), false);
});

test('a test configured once can be reused on another list', () => {
    const from1815 = where('year')(1815);
    const newArrivals = [
        { title: 'Mansfield Park', year: 1814 },
        { title: 'Emma', year: 1815 },
    ];
    assert.equal(books.filter(from1815).length, 1);
    assert.deepEqual(newArrivals.filter(from1815), [newArrivals[1]]);
});
