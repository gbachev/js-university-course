// Task 3: A discount that keeps the original
// Lecture: Objects in JavaScript
//
// Our shop shows the regular price and the sale price side by side.
// withDiscount(product, percent) should return a new product object with the same
// name and the price lowered by the percent, for example 20 for 20% off. A colleague
// wrote it, and now the regular price disappears from the page: the function changes
// the product we pass in and returns that same object. Fix it so the original product
// stays as it was and we get back a different object.
//
// Examples:
//   const shirt = { name: 'T-shirt', price: 50 };
//   withDiscount(shirt, 20)   // { name: 'T-shirt', price: 40 }
//   shirt.price               // 50
//
// Run the tests: npm test -- 07-objects/objects

export function withDiscount(product, percent) {
    product.price = product.price - (product.price * percent) / 100;
    return product;
}
