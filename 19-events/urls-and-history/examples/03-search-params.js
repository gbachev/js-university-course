// Run with: node 19-events/urls-and-history/examples/03-search-params.js
// URLSearchParams reads and changes the query string, and encodes it.
const url = new URL('https://books.example.com/search?q=dune&tag=sci-fi&tag=classic');
const params = url.searchParams;

console.log(params.get('q')); // dune
console.log(params.get('page')); // null
console.log(params.getAll('tag')); // ['sci-fi', 'classic']
console.log(params.has('tag')); // true

params.set('q', 'pride & prejudice');
params.append('tag', 'romance');
params.delete('tag', 'sci-fi');
params.set('page', 2);

for (const [key, value] of params) {
    console.log(key, value);
}
// q pride & prejudice
// tag classic
// tag romance
// page 2

console.log(params.toString()); // q=pride+%26+prejudice&tag=classic&tag=romance&page=2
console.log(url.search); // ?q=pride+%26+prejudice&tag=classic&tag=romance&page=2
