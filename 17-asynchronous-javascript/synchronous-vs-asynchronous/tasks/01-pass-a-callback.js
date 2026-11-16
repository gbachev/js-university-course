// Task 1: Pass a callback
// Lecture: Synchronous vs Asynchronous Code
//
// loadOrder(id, onLoaded) fakes a server that answers after 300 ms with the order
// { id, status: 'shipped' }. Right now it returns the order, and every caller gets
// undefined, because the return runs before the timer callback. Fix it: when the
// order is ready, call onLoaded with it. loadOrder() itself returns nothing, and
// onLoaded must not be called before the 300 ms are up.
//
// Examples:
//   loadOrder(1042, (order) => console.log(order));
//   // 300 ms later: { id: 1042, status: 'shipped' }
//
// Run the tests: npm test -- 17-asynchronous-javascript/synchronous-vs-asynchronous

export function loadOrder(id, onLoaded) {
    let order;

    setTimeout(() => {
        order = { id, status: 'shipped' };
    }, 300);

    return order;
}
