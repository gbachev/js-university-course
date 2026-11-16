// Task 2: A discount mixin factory
// Lecture: Multiple Inheritance / Mixins
//
// Some of our products can go on sale, and they come from different classes. Finish
// the mixin factory Discountable(Base): it returns a class that extends Base and adds
// a private field #percent, starting at 0, setDiscount(percent), which throws a
// RangeError 'Invalid discount' for a value below 0 or above 100, and a finalPrice
// getter, the price minus the discount. Course below already uses it. The discount
// stays private, so it does not show up in Object.keys().
//
// Examples:
//   const course = new Course('JavaScript', 50, 120);
//   course.finalPrice          // 50
//   course.setDiscount(20);
//   course.finalPrice          // 40
//   course instanceof Product  // true
//
// Run the tests: npm test -- 13-inheritance-and-prototype/multiple-inheritance-mixins

export const Discountable = (Base) => class extends Base {
    // Your code here
};

export class Product {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
}

export class Course extends Discountable(Product) {
    constructor(title, price, lessons) {
        super(title, price);
        this.lessons = lessons;
    }
}
