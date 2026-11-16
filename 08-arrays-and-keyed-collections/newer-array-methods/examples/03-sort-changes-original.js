const books = ['Emma', 'Dune', 'Beloved'];
const byTitle = books.sort();

console.log(byTitle); // [ 'Beloved', 'Dune', 'Emma' ]
console.log(books); // [ 'Beloved', 'Dune', 'Emma' ]
console.log(byTitle === books); // true
