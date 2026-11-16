// Task 1: Stop the stock watch
// Lecture: Memory Leaks
//
// The product page checks the stock of a product every second. watchStock(product,
// readStock) calls readStock(product) every 1000 ms and saves each answer in history.
// It returns { history, stop }, but stop() does nothing yet, so the interval runs, and
// keeps the product alive, after the page closes. Fix it: after stop(), readStock is not
// called any more, and calling stop() twice does no harm.
//
// Examples:
//   const watch = watchStock(lamp, (product) => product.stock);
//   // three seconds later: watch.history is [4, 4, 4]
//   watch.stop();
//   // three more seconds: still [4, 4, 4]
//
// Run the tests: npm test -- 22-performance-and-memory/memory-leaks

export function watchStock(product, readStock) {
    const history = [];
    setInterval(() => history.push(readStock(product)), 1000);
    return {
        history,
        stop: () => {},
    };
}
