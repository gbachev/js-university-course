// Task 3: A search cache with a limit
// Lecture: Memory Leaks
//
// Our book search is slow, so we cache its results, but a cache with one entry per query
// grows for as long as users type. Write createCachedSearch(find, maxResults): it returns
// { search, size }. search(query) returns the cached result for a query it has seen, and
// otherwise calls find(query), saves the result and returns it. The cache never holds more
// than maxResults queries: when it is full, the query used longest ago goes first. Unlike
// the lecture's cache, reading a query from the cache counts as a use, so popular queries
// stay. size() returns how many queries the cache holds right now.
//
// Examples:
//   const books = createCachedSearch((query) => titles.filter((t) => t.includes(query)), 2);
//   books.search('D')   // ['Dune', 'Dracula'], find runs
//   books.search('D')   // ['Dune', 'Dracula'], from the cache
//   books.search('E'); books.search('D'); books.search('U');
//   books.size()        // 2, and 'E' was dropped: 'D' was used more recently
//
// Run the tests: npm test -- 22-performance-and-memory/memory-leaks

export function createCachedSearch(find, maxResults) {
    // Your code here
}
