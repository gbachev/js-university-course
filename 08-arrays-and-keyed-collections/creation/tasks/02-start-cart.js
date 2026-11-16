// Task 2: Start a cart with one price
// Lecture: Creating Arrays
//
// When we add the first product to an empty cart, we start a new array of prices with
// that one price in it. The function startCart(firstPrice) should return an array that
// holds firstPrice as its only element. A colleague wrote it with the Array constructor,
// and the cart comes out with empty slots instead of the price, and for some prices the
// function even throws an error. Fix it.
//
// Examples:
//   startCart(5)      // [ 5 ]
//   startCart(9.99)   // [ 9.99 ]
//
// Run the tests: npm test -- 08-arrays-and-keyed-collections/creation

export function startCart(firstPrice) {
    return new Array(firstPrice);
}
