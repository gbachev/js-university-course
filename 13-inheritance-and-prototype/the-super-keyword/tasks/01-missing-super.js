// Task 1: Fix the missing super()
// Lecture: The super Keyword
//
// Our shop sells digital products: a Product with a file size. Creating one with the
// DigitalProduct class below throws a ReferenceError. Fix the constructor, so a
// digital product gets its title and price from Product and keeps its own
// fileSizeInMb. The methods of Product, such as describe(), work on it too.
//
// Examples:
//   const course = new DigitalProduct('JS course', 49, 120);
//   course.describe()             // 'JS course - 49 EUR'
//   course.fileSizeInMb           // 120
//   course instanceof Product     // true
//
// Run the tests: npm test -- 13-inheritance-and-prototype/the-super-keyword

export class Product {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }

    describe() {
        return `${this.title} - ${this.price} EUR`;
    }
}

export class DigitalProduct extends Product {
    constructor(title, price, fileSizeInMb) {
        this.fileSizeInMb = fileSizeInMb;
    }
}
