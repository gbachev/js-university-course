// Task 1: Build the chain
// Lecture: Inheritance
//
// Our bookshop has three kinds of objects: every product can describe itself, a book
// is a product with an author, and the ebook below is one book. Link them with
// __proto__ keys in the object literals: ebook to book, and book to product. Then
// ebook.describe() and ebook.byline() work through the chain, while ebook keeps only
// its own title, author and price. Do not copy any methods.
//
// Examples:
//   ebook.describe()         // 'Dune - 9.99 EUR'
//   ebook.byline()           // 'Dune by Frank Herbert'
//   Object.keys(ebook)       // ['title', 'author', 'price']
//
// Run the tests: npm test -- 13-inheritance-and-prototype/inheritance

export const product = {
    describe() {
        return `${this.title} - ${this.price} EUR`;
    }
};

export const book = {
    byline() {
        return `${this.title} by ${this.author}`;
    }
};

export const ebook = {
    title: 'Dune',
    author: 'Frank Herbert',
    price: 9.99
};
