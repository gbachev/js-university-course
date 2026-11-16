// Task 2: Timers inside promises
// Lecture: The JavaScript Concurrency Model
//
// placeOrder(log) below is harder: a timer queues a promise callback, and a promise
// callback sets a timer. Do not change placeOrder(). Write the seven messages into
// predictedOrder in the order they arrive. Remember the rule of the event loop: run
// the current task until the stack is empty, then every microtask, then the next
// task, and start again. The tests run placeOrder() and compare.
//
// Examples:
//   placeOrder(console.log);
//   // Order placed
//   // ...six more lines, in the order we predict
//
// Run the tests: npm test -- 17-asynchronous-javascript/concurrency-model

export function placeOrder(log) {
    log('Order placed');

    setTimeout(() => {
        log('Timer 1: send the email');
        Promise.resolve().then(() => {
            log('Promise inside timer 1: mark the email as sent');
        });
    }, 0);

    setTimeout(() => {
        log('Timer 2: update the stock');
    }, 0);

    Promise.resolve().then(() => {
        log('Promise 1: save the order');
        setTimeout(() => {
            log('Timer inside promise 1: show the receipt');
        }, 0);
    });

    log('Thank you');
}

export const predictedOrder = [
    // Your answer here
];
