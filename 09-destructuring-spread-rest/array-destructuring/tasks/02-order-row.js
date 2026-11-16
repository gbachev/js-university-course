// Task 2: Read an order row
// Lecture: Array Destructuring
//
// Our shop exports orders as text rows like '1001,2026-11-16,Laptop,1299.99': the order
// id, the date, the product and the total, separated by commas. Write
// readOrderRow(row): it returns { orderId, total }, where orderId is the first value
// and total is the last one turned into a number. Split the row into an array and
// destructure it, skipping the date and the product with extra commas.
//
// Examples:
//   readOrderRow('1001,2026-11-16,Laptop,1299.99')
//   // { orderId: '1001', total: 1299.99 }
//   readOrderRow('1002,2026-11-17,Mouse,25')
//   // { orderId: '1002', total: 25 }
//
// Run the tests: npm test -- 09-destructuring-spread-rest/array-destructuring

export function readOrderRow(row) {
    // Your code here
}
