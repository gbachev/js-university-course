// Task 2: Build on small functions
// Lecture: Calling Functions and Return Values
//
// Two small functions are ready: itemsTotal(price, quantity) and shippingFor(total),
// which is 0 from 50 up and 4.99 below that. Finish orderTotal(price, quantity): it
// calls itemsTotal() to get the total of the items, calls shippingFor() with that
// total, and returns the two added up, rounded to 2 decimal places.
//
// Examples:
//   orderTotal(10, 2)   // 24.99 (20 plus 4.99 shipping)
//   orderTotal(25, 2)   // 50 (free shipping)
//
// Run the tests: npm test -- 10-functions/calling-return

export function itemsTotal(price, quantity) {
    return price * quantity;
}

export function shippingFor(total) {
    return total >= 50 ? 0 : 4.99;
}

export function orderTotal(price, quantity) {
    const total = itemsTotal(price, quantity);
    // Your code here
}
