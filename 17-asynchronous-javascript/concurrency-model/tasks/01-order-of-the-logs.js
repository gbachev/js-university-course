// Task 1: The order of the logs
// Lecture: The JavaScript Concurrency Model
//
// openCart(log) below logs four messages: two from the script itself, one from a
// timer and one from a promise callback. Do not change openCart(). Predict the order
// in which the messages arrive and write them into the predictedOrder array, as
// strings, exactly as openCart() logs them. The tests run openCart() and compare.
//
// Examples:
//   openCart(console.log);
//   // Cart opened
//   // ...three more lines, in the order we predict
//
// Run the tests: npm test -- 17-asynchronous-javascript/concurrency-model

export function openCart(log) {
    log('Cart opened');

    setTimeout(() => {
        log('Timer: save a draft');
    }, 0);

    Promise.resolve().then(() => {
        log('Promise: count the items');
    });

    log('Cart shown');
}

export const predictedOrder = [
    // Your answer here
];
