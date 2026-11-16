export function placeOrder(log) {
    log('start');

    setTimeout(() => log('email sent'), 0);

    Promise.resolve()
        .then(() => log('payment checked'))
        .then(() => log('stock reserved'));

    async function saveOrder() {
        log('saving');
        await null;
        log('saved');
    }
    saveOrder();

    queueMicrotask(() => log('cart cleared'));

    log('end');
}

// Synchronous code first, then every microtask in the order it was queued,
// then the timer.
export const predictedOrder = [
    'start',
    'saving',
    'end',
    'payment checked',
    'saved',
    'cart cleared',
    'stock reserved',
    'email sent',
];
