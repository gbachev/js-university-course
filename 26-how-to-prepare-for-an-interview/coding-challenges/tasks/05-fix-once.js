// Task 5: Fix once()
// Lecture: Coding Challenges
//
// A colleague wrote once(fn) for the checkout button, and the code review found two
// bugs. Every call after the first returns undefined instead of the first result.
// And a fn that calls the wrapper again (the order handler triggers a click on the
// same button) runs again inside its own call, again and again, until the stack
// overflows, because called is set too late. Fix once() so fn runs only
// the first time, with the this and the arguments of that call, and every call
// returns the first result.
//
// Examples:
//   const placeOrder = once((orderId) => orderId);
//   placeOrder(42)   // 42
//   placeOrder(43)   // 42, and fn did not run again
//
// Run the tests: npm test -- 24-how-to-prepare-for-an-interview/coding-challenges

export function once(fn) {
    let called = false;
    return function (...args) {
        if (!called) {
            const result = fn.apply(this, args);
            called = true;
            return result;
        }
    };
}
