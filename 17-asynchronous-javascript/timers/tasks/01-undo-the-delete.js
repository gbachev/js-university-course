// Task 1: Undo the delete
// Lecture: Timers (setTimeout, setInterval, clearTimeout, clearInterval)
//
// Write scheduleDelete(orderId, onDelete). It waits 5 seconds (5000 ms) and then calls
// onDelete with the order id. It returns an undo function: calling undo() before the
// 5 seconds are up cancels the delete, so onDelete is never called. Calling undo()
// after the delete has happened does nothing and throws no error.
//
// Examples:
//   const undo = scheduleDelete(1042, (id) => console.log(`Order ${id} removed`));
//   // 5 seconds later: Order 1042 removed
//   // ...unless we call undo() before that
//
// Run the tests: npm test -- 17-asynchronous-javascript/timers

export function scheduleDelete(orderId, onDelete) {
    // Your code here
}
