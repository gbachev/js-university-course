// Task 3: A search cache with a limit
// Lecture: Memoization
//
// Search queries never run out, so our search cache needs a limit. Write
// memoizeWithLimit(fn, maxSize) for functions of one argument, with maxSize 100 when we
// leave it out. Like memoize(), it remembers results in a Map. When a new argument comes
// and the cache already holds maxSize entries, it removes the least recently used one
// first (LRU): a cache hit counts as a use, so it deletes the key and sets it again to
// move it to the end of the Map.
//
// Examples:
//   const search = memoizeWithLimit(runSearch, 2);
//   search('dune');
//   search('emma');
//   search('dune');          // a hit: 'dune' is now the newest
//   search('persuasion');    // the cache is full: 'emma' goes
//
// Run the tests: npm test -- 23-functional-and-advanced-techniques/memoization

export function memoizeWithLimit(fn, maxSize) {
    // Your code here
}
