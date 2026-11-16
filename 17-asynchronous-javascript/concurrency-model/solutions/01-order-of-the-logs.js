export function openCart(log) {
    log('Cart opened');

    setTimeout(() => {
        log('Timer: save a draft');
    }, 0);

    Promise.resolve().then(() => {
        log('Promise: count the items');
    });

    log('Cart shown');
}

// The script runs to the end first, then every microtask, then the next task.
export const predictedOrder = [
    'Cart opened',
    'Cart shown',
    'Promise: count the items',
    'Timer: save a draft',
];
