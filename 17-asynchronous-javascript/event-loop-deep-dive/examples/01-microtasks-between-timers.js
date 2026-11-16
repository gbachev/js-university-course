// Two due timers do not run back to back: the microtasks of the first go in between.
setTimeout(() => {
    console.log('Timer 1: save the cart');
    Promise.resolve().then(() => {
        console.log('Microtask: update the badge');
    });
}, 0);

setTimeout(() => {
    console.log('Timer 2: send analytics');
}, 0);

// Timer 1: save the cart
// Microtask: update the badge
// Timer 2: send analytics
