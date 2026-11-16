// Task 2: One method for all products
// Lecture: Brief Intro to Prototypes and Inheritance
//
// Our shop creates thousands of products with the Product constructor, and each one
// gets its own copy of the describe() function, created again on every new Product.
// Move describe() to Product.prototype, so all products share one function and every
// product keeps only name and price as its own properties. describe() still returns
// a line like 'Hat - 15 EUR'.
//
// Examples:
//   new Product('Hat', 15).describe()      // 'Hat - 15 EUR'
//   Object.keys(new Product('Hat', 15))    // ['name', 'price']
//
// Run the tests: npm test -- 07-objects/prototypes-inheritance-intro

export function Product(name, price) {
    this.name = name;
    this.price = price;
    this.describe = function () {
        return this.name + ' - ' + this.price + ' EUR';
    };
}
