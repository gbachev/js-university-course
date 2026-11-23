// Run with: node 19-events/urls-and-history/examples/01-url-parts.js
// A URL object splits an address into its parts, and its parts can be written.
const url = new URL('https://books.example.com/search?q=dune&page=2#results');

console.log(url.href); // https://books.example.com/search?q=dune&page=2#results
console.log(url.origin); // https://books.example.com
console.log(url.pathname); // /search
console.log(url.search); // ?q=dune&page=2
console.log(url.hash); // #results

url.pathname = '/books';
url.hash = '';
console.log(url.href); // https://books.example.com/books?q=dune&page=2
