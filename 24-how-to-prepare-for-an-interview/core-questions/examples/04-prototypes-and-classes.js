class Book {
    constructor(title) {
        this.title = title;
    }

    describe() {
        return `Book: ${this.title}`;
    }
}

const book = new Book("Dune");
console.log(book.describe()); // Book: Dune
console.log(typeof Book); // function
console.log(book.hasOwnProperty("describe")); // false
console.log(Object.getPrototypeOf(book) === Book.prototype); // true
