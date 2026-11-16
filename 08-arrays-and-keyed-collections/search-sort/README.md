# Searching and Sorting Arrays

Code for the lecture *Searching and Sorting Arrays* (section 8, Arrays and Keyed Collections) of the JavaScript course at gbachev.com.

## Examples
- `examples/01-includes.js` - `includes()` checks if a value is in the array
- `examples/02-index-of-last-index-of.js` - the first and the last position of a value
- `examples/03-index-zero-is-falsy.js` - index `0` is falsy and breaks a naive check
- `examples/04-find-find-index.js` - the first element that passes a test, and its index
- `examples/05-some-every.js` - does any or every element pass a test
- `examples/06-sort-strings.js` - `sort()` puts strings in order
- `examples/07-sort-numbers.js` - the default sort compares numbers as strings, a compare function fixes it
- `examples/08-case-insensitive-sort.js` - `localeCompare()` sorts without caring about case
- `examples/09-sort-by-property.js` - sort objects by a property

Run one with `node 08-arrays-and-keyed-collections/search-sort/examples/01-includes.js` from the repository folder.

## Tasks
1. **Find the user by email** (`tasks/01-find-user.js`) - find the first object with a matching property
2. **Is it in stock?** (`tasks/02-in-stock.js`) - fix an `indexOf()` check that gets index `0` and `-1` wrong
3. **Cheapest first** (`tasks/03-sort-by-price.js`) - sort a copy of the products by price

Run the tests with `npm test -- 08-arrays-and-keyed-collections/search-sort`. They fail until the task is solved. Compare with `solutions/` after you try.
