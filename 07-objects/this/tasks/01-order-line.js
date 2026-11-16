// Task 1: The order line
// Lecture: The this Keyword
//
// createOrderLine(name, price, quantity) returns one line of a shop order. Finish its
// two methods. total() returns the price times the quantity. describe() returns a
// line like 'Hat x 2 = 30 EUR' and uses total() for the amount. Both read the values
// through this, so a line we change later (say, its quantity) gives the new total.
//
// Examples:
//   const line = createOrderLine('Hat', 15, 2);
//   line.total()       // 30
//   line.describe()    // 'Hat x 2 = 30 EUR'
//   line.quantity = 3;
//   line.total()       // 45
//
// Run the tests: npm test -- 07-objects/this

export function createOrderLine(name, price, quantity) {
    return {
        name,
        price,
        quantity,
        total() {
            // Your code here
        },
        describe() {
            // Your code here
        },
    };
}
