// Task 1: Predict the refresh
// Lecture: Event Loop Deep Dive
//
// refreshCart(log) below mixes a timer, queueMicrotask(), an async function with an
// await and a chain of two then() calls. Do not change the code. Write the seven
// messages into predictedOrder in the order they arrive, as strings, exactly as they
// are logged. Remember: an async function runs synchronously until its first await,
// and the rest of it is a microtask. The tests run refreshCart() and compare.
//
// Examples:
//   refreshCart(console.log);
//   // Coupon: start
//   // ...six more lines, in the order we predict
//
// Run the tests: npm test -- 17-asynchronous-javascript/event-loop-deep-dive

export function refreshCart(log) {
    setTimeout(() => log('Timer: save a draft'), 0);

    queueMicrotask(() => log('Microtask: count the items'));

    applyCoupon(log);

    Promise.resolve()
        .then(() => log('Then 1: update the total'))
        .then(() => log('Then 2: show the total'));

    log('Script done');
}

async function applyCoupon(log) {
    log('Coupon: start');
    const percent = await Promise.resolve(10);
    log(`Coupon: ${percent}% off`);
}

export const predictedOrder = [
    // Your answer here
];
