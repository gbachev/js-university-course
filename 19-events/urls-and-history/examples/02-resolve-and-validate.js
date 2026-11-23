// Run with: node 19-events/urls-and-history/examples/02-resolve-and-validate.js
// Resolving a relative address against a base, and checking an address first.
const base = 'https://books.example.com/books/dune';

console.log(new URL('reviews', base).href); // https://books.example.com/books/reviews
console.log(new URL('/search?q=emma', base).href); // https://books.example.com/search?q=emma
console.log(new URL('../about', base).href); // https://books.example.com/about

try {
    new URL('books/dune');
} catch (error) {
    console.log(error.name); // TypeError
}

console.log(URL.canParse('books/dune')); // false
console.log(URL.canParse('books/dune', base)); // true
