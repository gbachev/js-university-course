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
            // A task, not a microtask: waiting tasks get their turn in between.
            setTimeout(next, 0);
        }

        next();
    });
}
