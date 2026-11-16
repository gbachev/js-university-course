# Best Practices

Code for the lecture *Best Practices* (section 8, Arrays and Keyed Collections) of the JavaScript course at gbachev.com.

## Examples
- `examples/01-array-literals.js` - array literals instead of the `Array` constructor
- `examples/02-splice-instead-of-delete.js` - `splice()` instead of `delete` to remove an element
- `examples/03-avoid-sparse-arrays.js` - add elements in order instead of leaving holes
- `examples/04-array-from.html` - `Array.from()` to turn a NodeList into an array (browser)
- `examples/05-no-for-in.js` - `for...of` instead of `for...in` for arrays
- `examples/06-functional-methods.js` - `map()`, `filter()` and `reduce()` instead of loops

Run one with `node 08-arrays-and-keyed-collections/best-practices/examples/01-array-literals.js` from the repository folder. For the `.html` example, run `npm run serve`, open `08-arrays-and-keyed-collections/best-practices/examples/04-array-from.html` from the address it prints and look at the console.
