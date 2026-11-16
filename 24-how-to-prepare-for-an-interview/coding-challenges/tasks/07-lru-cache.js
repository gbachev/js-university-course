// Task 7: An LRU cache
// Lecture: Coding Challenges
//
// A new one, and a classic for the harder rounds. Write the class LruCache: a cache
// that holds at most capacity entries and, when it is full, drops the least recently
// used one. get(key) returns the value, or undefined when the key is missing, and
// counts as a use. set(key, value) adds or updates an entry, which is a use too; when
// a new key does not fit, the entry used longest ago goes first. The size getter
// returns how many entries the cache holds. Both get and set should do a constant
// amount of work. Hint: a Map remembers the order in which keys were added.
//
// Examples:
//   const recent = new LruCache(2);
//   recent.set('dune', 'Dune');
//   recent.set('emma', 'Emma');
//   recent.get('dune');                // 'Dune', now the most recent
//   recent.set('ulysses', 'Ulysses');  // full: 'emma' goes
//   recent.get('emma')                 // undefined
//
// Run the tests: npm test -- 24-how-to-prepare-for-an-interview/coding-challenges

export class LruCache {
    constructor(capacity) {
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
