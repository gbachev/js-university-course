// Task 2: Shipping cost per product type
// Lecture: Polymorphism
//
// Our shop used to compute shipping with a switch on product.type. We are replacing
// it with classes, and totalShipping() below already calls shippingCost() on every
// product without asking for its type. Make each class answer in its own way:
// a PhysicalProduct costs 5 EUR plus 1 for every started kilogram after the first
// (Math.ceil(weightInKg) - 1), a DigitalProduct costs 0, and an OversizedProduct costs
// what a PhysicalProduct costs plus 25 (use super). Product itself keeps throwing.
//
// Examples:
//   new PhysicalProduct('Desk lamp', 25, 1).shippingCost()    // 5
//   new PhysicalProduct('Kettle', 30, 2.5).shippingCost()     // 7
//   new DigitalProduct('JS course', 49).shippingCost()        // 0
//   new OversizedProduct('Sofa', 400, 3).shippingCost()       // 32
//
// Run the tests: npm test -- 13-inheritance-and-prototype/polymorphism

export class Product {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }

    shippingCost() {
        throw new Error(`${this.constructor.name} must implement shippingCost()`);
    }
}

export class PhysicalProduct extends Product {
    constructor(title, price, weightInKg) {
        super(title, price);
        this.weightInKg = weightInKg;
    }

    // Your code here
}

export class DigitalProduct extends Product {
    // Your code here
}

export class OversizedProduct extends PhysicalProduct {
    // Your code here
}

export function totalShipping(products) {
    return products.reduce((sum, product) => sum + product.shippingCost(), 0);
}
