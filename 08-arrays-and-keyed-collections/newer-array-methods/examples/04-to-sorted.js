const books = ['Emma', 'Dune', 'Beloved'];
const byTitle = books.toSorted();

console.log(byTitle); // [ 'Beloved', 'Dune', 'Emma' ]
console.log(books); // [ 'Emma', 'Dune', 'Beloved' ]
console.log(byTitle === books); // false
