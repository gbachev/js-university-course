// Run with: node 19-events/urls-and-history/examples/04-glued-vs-built.js
// Gluing a query string by hand breaks on "&"; building it with URLSearchParams does not.
const query = 'pride & prejudice';

const glued = new URL(`https://books.example.com/search?q=${query}&page=1`);
console.log([...glued.searchParams.keys()]); // ['q', ' prejudice', 'page']

const built = new URL('/search', 'https://books.example.com');
built.search = new URLSearchParams({ q: query, page: 1 });
console.log(built.href); // https://books.example.com/search?q=pride+%26+prejudice&page=1
