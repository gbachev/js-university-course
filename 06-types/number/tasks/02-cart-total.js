// Task 2: Cart total
// Lecture: Number
//
// Our cart multiplies the price of an item by its quantity, and for a price of 0.1
// and a quantity of 3 it shows 0.30000000000000004. Change cartTotal(price,
// quantity) so it returns price times quantity rounded to 2 decimal places, as a
// number. One way: multiply the total by 100, round it with Math.round() and divide
// it by 100 again.
//
// Examples:
//   cartTotal(0.1, 3)     // 0.3
//   cartTotal(19.99, 3)   // 59.97
//   cartTotal(2.5, 4)     // 10
//
// Run the tests: npm test -- 06-types/number

export function cartTotal(price, quantity) {
    return price * quantity;
}
