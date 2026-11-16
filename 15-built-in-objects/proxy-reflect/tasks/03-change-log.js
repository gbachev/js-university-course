// Task 3: The change log
// Lecture: Proxy and Reflect
//
// Support wants to see how an order changed. Write withChangeLog(order, log), which
// returns a proxy of the order. Every assignment through it that changes a value
// adds { key, from, to } to the log array, with the old and the new value. Writing
// the value a key already has adds nothing (compare with Object.is). The set trap
// returns the result of Reflect.set, so a write to a read-only property still
// throws a TypeError, and a write that failed is not in the log.
//
// Examples:
//   const log = [];
//   const order = withChangeLog({ status: 'new', total: 40 }, log);
//   order.status = 'paid';
//   order.total = 40;
//   log     // [{ key: 'status', from: 'new', to: 'paid' }]
//
// Run the tests: npm test -- 15-built-in-objects/proxy-reflect

export function withChangeLog(order, log) {
    // Your code here
}
