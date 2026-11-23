// Task 1: Finish filterOrders
// Lecture: Take-Home Tasks and Your Project
//
// filterOrders(orders, status) from the lecture covers the normal case. Finish it for
// the edges a grader tries. 'all' returns every order, and any status in STATUSES
// returns the orders with that status. An unknown status, such as 'lost' or a typo
// like 'Paid', throws an Error with the message 'Unknown status: lost', so a bug in the
// filter menu shows up instead of an empty table. An empty list gives [], and so does
// a missing one (null or undefined), for example when the API sent no orders field.
// The status is checked first, so an unknown status throws even for an empty list.
// The list we pass in is never changed.
//
// Examples:
//   filterOrders(orders, 'paid')    // the paid orders
//   filterOrders([], 'shipped')     // []
//   filterOrders(undefined, 'all')  // []
//   filterOrders(orders, 'lost')    // throws Error: Unknown status: lost
//
// Run the tests: npm test -- 26-how-to-prepare-for-an-interview/take-home-tasks

export const STATUSES = ['paid', 'shipped', 'cancelled'];

export function filterOrders(orders, status) {
    if (status === 'all') {
        return orders;
    }
    return orders.filter((order) => order.status === status);
}
