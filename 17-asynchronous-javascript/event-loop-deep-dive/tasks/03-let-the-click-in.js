// Task 3: Let the click in
// Lecture: Event Loop Deep Dive
//
// processOrders(orders, handle) calls handle for each order, one by one, and returns
// a promise that fulfills when every order is done. Each next step is queued with
// queueMicrotask(), so the whole list runs as one long chain of microtasks, and a
// click (a task) that is already waiting has to wait for the end. Fix it so each
// next step is a task of its own: queue it with setTimeout(next, 0), like the
// waiting click. Then the click runs between two orders. The orders are still
// handled in order, and an empty list fulfills right away.
//
// Examples:
//   setTimeout(() => console.log('click'), 0);
//   processOrders([1, 2, 3], console.log);
//   // 1, click, 2, 3
//
// Run the tests: npm test -- 17-asynchronous-javascript/event-loop-deep-dive

export function processOrders(orders, handle) {
    return new Promise((resolve) => {
        let i = 0;

        function next() {
            if (i === orders.length) {
                resolve();
                return;
            }
            handle(orders[i]);
            i++;
            queueMicrotask(next);
        }

        next();
    });
}
