// Calls the server of example 02 with fetch() from Node.
// Start 02-express-server.js in one terminal, then run this one in a second terminal.
const response = await fetch('http://localhost:3000/books');

console.log(response.status); // 200
console.log(response.headers.get('content-type')); // application/json; charset=utf-8
const books = await response.json();
console.log(books.length); // 2
console.log(books[0].title); // Dune

const missing = await fetch('http://localhost:3000/authors');
console.log(missing.status); // 404
