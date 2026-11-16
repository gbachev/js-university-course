// The promise callback (a microtask) runs before the timer callback (a task).
console.log('Checkout started');

setTimeout(() => {
    console.log('Timer: show the receipt');
}, 0);

Promise.resolve().then(() => {
    console.log('Promise: save the order');
});

console.log('Checkout finished');

// Checkout started
// Checkout finished
// Promise: save the order
// Timer: show the receipt
