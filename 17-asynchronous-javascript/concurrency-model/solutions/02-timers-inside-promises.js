export function placeOrder(log) {
    log('Order placed');

    setTimeout(() => {
        log('Timer 1: send the email');
        Promise.resolve().then(() => {
            log('Promise inside timer 1: mark the email as sent');
        });
    }, 0);

    setTimeout(() => {
        log('Timer 2: update the stock');
    }, 0);

    Promise.resolve().then(() => {
        log('Promise 1: save the order');
        setTimeout(() => {
            log('Timer inside promise 1: show the receipt');
        }, 0);
    });

    log('Thank you');
}

// The timer set inside promise 1 joins the task queue after timers 1 and 2, and the
// microtask queued by timer 1 runs before the next task, timer 2.
export const predictedOrder = [
    'Order placed',
    'Thank you',
    'Promise 1: save the order',
    'Timer 1: send the email',
    'Promise inside timer 1: mark the email as sent',
    'Timer 2: update the stock',
    'Timer inside promise 1: show the receipt',
];
