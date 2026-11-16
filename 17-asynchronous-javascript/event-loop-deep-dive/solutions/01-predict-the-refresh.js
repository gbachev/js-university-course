export function refreshCart(log) {
    setTimeout(() => log('Timer: save a draft'), 0);

    queueMicrotask(() => log('Microtask: count the items'));

    applyCoupon(log);

    Promise.resolve()
        .then(() => log('Then 1: update the total'))
        .then(() => log('Then 2: show the total'));

    log('Script done');
}

async function applyCoupon(log) {
    log('Coupon: start');
    const percent = await Promise.resolve(10);
    log(`Coupon: ${percent}% off`);
}

// The script first, then the microtasks in the order they were queued (Then 2 is
// queued only when Then 1 has run), and the timer last.
export const predictedOrder = [
    'Coupon: start',
    'Script done',
    'Microtask: count the items',
    'Coupon: 10% off',
    'Then 1: update the total',
    'Then 2: show the total',
    'Timer: save a draft',
];
