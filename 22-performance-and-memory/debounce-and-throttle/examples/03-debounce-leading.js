// Leading edge: the first call runs right away, the calls during the quiet period do not.
function debounceLeading(fn, delay) {
    let timerId;
    return (...args) => {
        if (timerId === undefined) {
            fn(...args);
        }
        clearTimeout(timerId);
        timerId = setTimeout(() => {
            timerId = undefined;
        }, delay);
    };
}

const placeOrder = debounceLeading((id) => {
    console.log(`Order ${id} placed`);
}, 1000);

placeOrder(42);
placeOrder(42);
setTimeout(() => placeOrder(42), 500);
setTimeout(() => placeOrder(43), 2000);
// Order 42 placed
// Order 43 placed
