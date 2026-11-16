// Better: a lazy chain stops after the third match instead of checking every book.
const books = Array.from({ length: 100_000 }, (_, i) => ({
    title: `Book ${i}`,
    inStock: i % 3 === 0,
}));

let checks = 0;
const inStock = book => {
    checks++;
    return book.inStock;
};

const lazyThree = books.values()
    .filter(inStock)
    .take(3)
    .toArray();
console.log(lazyThree.map(book => book.title));
// [ 'Book 0', 'Book 3', 'Book 6' ]
console.log(checks); // 7
