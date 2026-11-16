import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { createCachedSearch } = await import(
    process.env.SOLUTIONS
        ? '../solutions/03-search-cache-with-a-limit.js'
        : './03-search-cache-with-a-limit.js'
);

const titles = ['Dune', 'Emma', 'Ulysses', 'Dracula'];

function countingFind() {
    const queries = [];
    const find = (query) => {
        queries.push(query);
        return titles.filter((title) => title.includes(query));
    };
    return { queries, find };
}

test('a new query runs the search', () => {
    const { queries, find } = countingFind();
    const books = createCachedSearch(find, 10);
    assert.deepEqual(books.search('D'), ['Dune', 'Dracula']);
    assert.deepEqual(queries, ['D']);
});

test('a query we have seen comes from the cache', () => {
    const { queries, find } = countingFind();
    const books = createCachedSearch(find, 10);
    books.search('D');
    assert.deepEqual(books.search('D'), ['Dune', 'Dracula']);
    assert.deepEqual(queries, ['D']);
});

test('the cache never grows past its limit', () => {
    const { find } = countingFind();
    const books = createCachedSearch(find, 100);
    for (let i = 0; i < 1000; i++) {
        books.search(`query ${i}`);
    }
    assert.equal(books.size(), 100);
});

test('when the cache is full, the query used longest ago goes first', () => {
    const { queries, find } = countingFind();
    const books = createCachedSearch(find, 2);
    books.search('D');
    books.search('E');
    books.search('U');
    assert.equal(books.size(), 2);
    books.search('E'); // still cached
    books.search('D'); // dropped, so the search runs again
    assert.deepEqual(queries, ['D', 'E', 'U', 'D']);
});

test('an empty result is cached too', () => {
    const { queries, find } = countingFind();
    const books = createCachedSearch(find, 5);
    assert.deepEqual(books.search('Zola'), []);
    assert.deepEqual(books.search('Zola'), []);
    assert.deepEqual(queries, ['Zola']);
});

test('a new cache starts empty', () => {
    const { find } = countingFind();
    assert.equal(createCachedSearch(find, 5).size(), 0);
});

test('reading a query from the cache keeps it from being dropped', () => {
    const { queries, find } = countingFind();
    const books = createCachedSearch(find, 2);
    books.search('D');
    books.search('E');
    books.search('D'); // from the cache, and now used more recently than 'E'
    books.search('U'); // the cache is full: 'E' goes
    books.search('D'); // still cached
    books.search('E'); // dropped, so the search runs again
    assert.deepEqual(queries, ['D', 'E', 'U', 'E']);
});
