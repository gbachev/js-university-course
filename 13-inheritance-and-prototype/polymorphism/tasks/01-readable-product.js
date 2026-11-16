// Task 1: A readable product
// Lecture: Polymorphism
//
// Our order emails print products with template literals, and all they show is
// [object Object]. Override toString() in the Product class, so a product turns into
// a line like 'Desk lamp (24.50 EUR)', with the price always shown with two decimals.
// Template literals, String() and join() then use it on their own.
//
// Examples:
//   const lamp = new Product('Desk lamp', 24.5);
//   `You bought ${lamp}`        // 'You bought Desk lamp (24.50 EUR)'
//   String(new Product('Pen', 2))   // 'Pen (2.00 EUR)'
//
// Run the tests: npm test -- 13-inheritance-and-prototype/polymorphism

export class Product {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }

    // Your code here
}
