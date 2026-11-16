const books = [
    { title: 'Dune', genre: 'sci-fi' },
    { title: 'Emma', genre: 'classic' },
    { title: 'Hyperion', genre: 'sci-fi' },
    { title: 'Persuasion', genre: 'classic' }
];

const byGenre = Object.groupBy(books, book => book.genre);

console.log(Object.keys(byGenre)); // [ 'sci-fi', 'classic' ]
console.log(byGenre.classic.map(book => book.title));
// [ 'Emma', 'Persuasion' ]
console.log(byGenre.horror); // undefined
