// Task 1: A long order history
// Lecture: Tail Call Optimization (TCO)
//
// Every order of a customer points to the order before it: { id, total, previous }, and
// the first order has previous: null. historyTotal(order) adds up the totals of an order
// and of all the orders before it. It is recursive, so a loyal customer with 100,000
// orders gets a RangeError instead of a total. Rewrite it as a loop that follows the
// previous links, so it works for any length. historyTotal(null) returns 0.
//
// Examples:
//   const first = { id: 1, total: 20, previous: null };
//   const second = { id: 2, total: 15, previous: first };
//   historyTotal(second)    // 35
//
// Run the tests: npm test -- 23-functional-and-advanced-techniques/tail-call-optimization

export function historyTotal(order) {
    if (order === null) {
        return 0;
    }
    return order.total + historyTotal(order.previous);
}
