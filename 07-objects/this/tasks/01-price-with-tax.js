// Task 1: Price with tax
// Lecture: The "this" Keyword
//
// Our shop has one function, priceWithTax(rate), that works on whatever product is its
// this: it returns this.price plus the tax, for a rate like 20 for 20%. The products
// are plain objects such as { name: 'Hat', price: 15 } and do not have this function
// as a method. Write getPriceWithTax(product, rate): it runs priceWithTax with product
// as its this and the rate as its argument, and returns the result. call takes the
// value for this first, then the arguments of the function, one by one. Do not change
// priceWithTax and do not add a method to the product.
//
// Examples:
//   getPriceWithTax({ name: 'Hat', price: 15 }, 20)    // 18
//   getPriceWithTax({ name: 'Book', price: 30 }, 0)    // 30
//
// Run the tests: npm test -- 07-objects/this

export function priceWithTax(rate) {
    return this.price + (this.price * rate) / 100;
}

export function getPriceWithTax(product, rate) {
    // Your code here
}
