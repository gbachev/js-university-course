import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { memoizeWithLimit } = await import(
    process.env.SOLUTIONS ? '../solutions/03-memoize-with-limit.js' : './03-memoize-with-limit.js'
);

function countingSearch() {
    const search = (query) => {
        search.calls.push(query);
        return `results for ${query}`;
    };
    search.calls = [];
    return search;
}

test('returns the result and remembers it', () => {
    const run = countingSearch();
    const search = memoizeWithLimit(run, 2);
    assert.equal(search('dune'), 'results for dune');
    assert.equal(search('dune'), 'results for dune');
    assert.deepEqual(run.calls, ['dune']);
});

test('when full, a new argument removes the oldest entry', () => {
    const run = countingSearch();
    const search = memoizeWithLimit(run, 2);
    search('dune');
    search('emma');
    search('persuasion'); // removes dune
    search('emma'); // still cached
    search('dune'); // computed again
    assert.deepEqual(run.calls, ['dune', 'emma', 'persuasion', 'dune']);
});

test('a cache hit makes the entry the newest one', () => {
    const run = countingSearch();
    const search = memoizeWithLimit(run, 2);
    search('dune');
    search('emma');
    search('dune'); // a hit: emma is now the oldest
    search('persuasion'); // removes emma
    search('dune'); // still cached
    search('emma'); // computed again
    assert.deepEqual(run.calls, ['dune', 'emma', 'persuasion', 'emma']);
});

test('never holds more than maxSize entries', () => {
    const run = countingSearch();
    const search = memoizeWithLimit(run, 1);
    search('dune');
    search('emma');
    search('dune');
    assert.deepEqual(run.calls, ['dune', 'emma', 'dune']);
});

test('keeps 100 entries when we leave out maxSize', () => {
    const run = countingSearch();
    const search = memoizeWithLimit(run);
    for (let i = 0; i < 100; i++) search(`query ${i}`);
    search('query 0');
    assert.equal(run.calls.length, 100);
    search('query 100'); // the cache is full: query 1 is the oldest now
    search('query 1');
    assert.equal(run.calls.length, 102);
});
