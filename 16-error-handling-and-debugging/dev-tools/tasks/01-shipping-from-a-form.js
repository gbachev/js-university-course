// Task 1: Shipping from a form
// Lecture: Dev Tools (Features, Debugging, Breakpoints)
//
// orderTotal(order) adds up the lines of an order (price times quantity) and the
// shipping. The shipping comes from a form, so sometimes it is a string like '5.5',
// and then the total comes out wrong. Find the cause as in the lecture: start
// npm run serve, open tasks/01-shipping-from-a-form.html, and set a breakpoint in
// orderTotal (or add a debugger statement). The values in the failing test are another
// route. Fix orderTotal so it always returns a number. Shipping given as a number must
// keep working.
//
// Examples:
//   orderTotal({ lines: [{ price: 10, quantity: 2 }], shipping: 5 })      // 25
//   orderTotal({ lines: [{ price: 10, quantity: 2 }], shipping: '5.5' })  // 25.5
//
// Run the tests: npm test -- 16-error-handling-and-debugging/dev-tools

export function orderTotal(order) {
    let subtotal = 0;
    for (const line of order.lines) {
        subtotal = subtotal + line.price * line.quantity;
    }
    return subtotal + order.shipping;
}
