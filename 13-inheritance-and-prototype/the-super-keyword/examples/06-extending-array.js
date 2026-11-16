// A BookList is a real array with a method of our own.
class BookList extends Array {
    titles() {
        return this.map((book) => book.title).join(', ');
    }
}

const books = BookList.from([
    { title: 'Dune', available: true },
    { title: 'Emma', available: false },
    { title: 'Ulysses', available: true }
]);

const onShelf = books.filter((book) => book.available);

console.log(books.length); // 3
console.log(onShelf instanceof BookList); // true
console.log(onShelf.titles()); // Dune, Ulysses
console.log(Array.isArray(onShelf)); // true
