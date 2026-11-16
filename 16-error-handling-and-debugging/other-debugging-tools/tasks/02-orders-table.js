// Task 2: The orders table
// Lecture: Other Debugging Tools and Methods
//
// While we debug the orders page we want to see the orders as a table, not as a long
// list of objects. Change logOrders(orders) so it prints them with console.table(),
// showing only the customer and total columns: we pass the column names as the second
// argument of console.table(), customer first.
//
// Examples:
//   logOrders([{ id: 101, customer: 'John Doe', total: 59.9 }])
//   // a table with the columns (index), customer and total
//
// Run the tests: npm test -- 16-error-handling-and-debugging/other-debugging-tools

export function logOrders(orders) {
    console.log(orders);
}
