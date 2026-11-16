// Task 3: An LRU cache that reports what it drops
// Lecture: More Coding Challenges
//
// Write the LRU cache from the lecture again from an empty file, then add a second
// constructor parameter: onEvict(key, value), a function the cache calls whenever it
// drops an entry to make room, so the caller can, for example, free a cover image.
// get(key) returns the value or undefined and counts as a use. set(key, value) adds
// or updates an entry, and updating counts as a use too. Updating a key that is
// already there drops nothing, and get() never drops anything. onEvict is optional: without it the cache works the same.
// When onEvict runs, the entry is already gone, so size is back at the limit. A cached
// 0 or '' is still a hit. The size getter returns how many entries the cache holds.
//
// Examples:
//   const covers = new LRUCache(2, (key, value) => console.log(`dropped ${key}`));
//   covers.set('dune', 'dune.jpg');
//   covers.set('emma', 'emma.jpg');
//   covers.get('dune');                    // 'dune.jpg', now the most recent
//   covers.set('ulysses', 'ulysses.jpg');  // dropped emma
//
// Run the tests: npm test -- 24-how-to-prepare-for-an-interview/more-coding-challenges

export class LRUCache {
    constructor(limit, onEvict) {
        // Your code here
    }

    get(key) {
        // Your code here
    }

    set(key, value) {
        // Your code here
    }

    get size() {
        // Your code here
    }
}
