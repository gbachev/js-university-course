// Task 3: Poll without overlap
// Lecture: Timers: setTimeout and setInterval
//
// pollUntilShipped(checkStatus, onShipped) asks the server for the status of an order
// until it is 'shipped'. checkStatus(onAnswer) is a slow request: it calls onAnswer
// with a status string some time later. When the status is 'shipped', we call
// onShipped with the number of checks we made. The code below uses setInterval(), so
// a new check leaves while the previous one is still waiting, and onShipped gets a
// wrong count. Rewrite it with a recursive setTimeout(): the first check starts after
// 1 second, and every next check starts 1 second after the previous answer.
//
// Examples:
//   // the server answers 'packing', 'packing', 'shipped', each after 1.5 seconds
//   pollUntilShipped(checkStatus, (checks) => console.log(`Shipped after ${checks}`));
//   // checks start at 1 s, 3.5 s and 6 s; at 7.5 s: Shipped after 3
//
// Run the tests: npm test -- 17-asynchronous-javascript/timers

export function pollUntilShipped(checkStatus, onShipped) {
    let checks = 0;

    const pollId = setInterval(() => {
        checks++;
        checkStatus((status) => {
            if (status === 'shipped') {
                clearInterval(pollId);
                onShipped(checks);
            }
        });
    }, 1000);
}
