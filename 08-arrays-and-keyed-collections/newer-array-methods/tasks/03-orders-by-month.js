// Task 3: Orders by month
// Lecture: Newer Array Methods: at(), findLast(), toSorted() and More
//
// The shop's monthly report lists the orders of each month. Each order is an object
// like { id: 1, date: '2026-03-14', total: 120 }. Write ordersByMonth(orders), which
// groups the orders by the month of their date, a key like '2026-03' (the first 7
// characters of the date). Each group holds the order objects in their original order.
// A month with no orders has no key. Then write monthTotal(orders, month), which
// returns the sum of the totals of that month's orders, or 0 when the month has none.
//
// Examples:
//   const orders = [
//       { id: 1, date: '2026-03-14', total: 120 },
//       { id: 2, date: '2026-04-02', total: 35 },
//       { id: 3, date: '2026-03-28', total: 80 }
//   ];
//   ordersByMonth(orders)['2026-03']  // the orders with id 1 and 3
//   monthTotal(orders, '2026-03')     // 200
//   monthTotal(orders, '2026-05')     // 0
//
// Run the tests: npm test -- 08-arrays-and-keyed-collections/newer-array-methods

export function ordersByMonth(orders) {
    // Your code here
}

export function monthTotal(orders, month) {
    // Your code here
}
