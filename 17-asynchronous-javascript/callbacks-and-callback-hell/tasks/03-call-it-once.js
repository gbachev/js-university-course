// Task 3: Call it once
// Lecture: Callbacks and Callback Hell
//
// We cannot fix a library that calls our callback twice, but we can protect our
// side. Write once(callback): it returns a new function that passes its arguments on
// to callback the first time it is called and ignores every call after that. The
// tests hand such a wrapped callback to the buggy payments library below and check
// that the customer gets one receipt email.
//
// Examples:
//   const report = once((error, id) => console.log(`Receipt for ${id}`));
//   report(null, 'PAY-1042'); // Receipt for PAY-1042
//   report(null, 'PAY-1042'); // (nothing)
//
// Run the tests: npm test -- 17-asynchronous-javascript/callbacks-and-callback-hell

// a third-party payment library we do not control
export const payments = {
    charge(amount, callback) {
        setTimeout(() => callback(null, 'PAY-1042'), 100);
        // a retry bug calls our callback a second time
        setTimeout(() => callback(null, 'PAY-1042'), 200);
    },
};

export function once(callback) {
    // Your code here
}
