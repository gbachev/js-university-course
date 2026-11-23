// Task 3: Predict the order
// Lecture: Core JavaScript Questions
//
// An interview favorite: "in what order does this print?" placeOrder(log) below runs
// synchronous code, a timer, promise callbacks and an async function, and calls
// log() with a label at each step. Read it without running it, and write the labels
// in predictedOrder in the order log() gets them. Then prove the answer: the tests run
// placeOrder() and compare. Do not change placeOrder(). If the prediction was wrong,
// explain to yourself which queue each label waited in before fixing the array.
//
// Examples:
//   // for console.log(1); setTimeout(() => console.log(2), 0); console.log(3);
//   // the order would be [1, 3, 2]
//
// Run the tests: npm test -- 24-how-to-prepare-for-an-interview/core-questions

export function placeOrder(log) {
    log('start');

    setTimeout(() => log('email sent'), 0);

    Promise.resolve()
        .then(() => log('payment checked'))
        .then(() => log('stock reserved'));

    async function saveOrder() {
        log('saving');
        await null;
        log('saved');
    }
    saveOrder();

    queueMicrotask(() => log('cart cleared'));

    log('end');
}

export const predictedOrder = [
    // Your answer here: the labels, in order
];
