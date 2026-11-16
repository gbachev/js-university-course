// Task 1: A price mixin
// Lecture: Mixins and Multiple Inheritance
//
// Books and courses in our shop have nothing in common except a price, so they do not
// share a parent class. Write the object mixin priced with two methods.
// formatPrice() returns the price with two decimals and the currency, like
// '12.50 EUR'. withTax(rate) returns the price with the tax added, rounded to cents:
// withTax(0.2) on 12.5 gives 15. Then mix priced into Book and Course with
// Object.assign(), so both classes share the same two functions.
//
// Examples:
//   const dune = new Book('Dune', 'Frank Herbert', 12.5);
//   dune.formatPrice()                     // '12.50 EUR'
//   dune.withTax(0.2)                      // 15
//   new Course('JS', 49, 120).formatPrice() // '49.00 EUR'
//
// Run the tests: npm test -- 13-inheritance-and-prototype/multiple-inheritance-mixins

export const priced = {
    // Your code here
};

export class Book {
    constructor(title, author, price) {
        this.title = title;
        this.author = author;
        this.price = price;
    }
}

export class Course {
    constructor(title, price, lessons) {
        this.title = title;
        this.price = price;
        this.lessons = lessons;
    }
}
