// Puzzle 1: write down the order before running it.
console.log('Cart opened');

setTimeout(() => console.log('Timer: save a draft'), 0);

queueMicrotask(() => console.log('Microtask: count items'));

Promise.resolve()
    .then(() => console.log('Then 1: apply the coupon'))
    .then(() => console.log('Then 2: update the total'));

console.log('Cart shown');

// Cart opened
// Cart shown
// Microtask: count items
// Then 1: apply the coupon
// Then 2: update the total
// Timer: save a draft
