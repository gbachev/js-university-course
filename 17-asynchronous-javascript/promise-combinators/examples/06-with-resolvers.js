// Promise.withResolvers(): the code that settles the promise is somewhere else.
const { promise, resolve } = Promise.withResolvers();

promise.then((id) => console.log(`Payment ${id} confirmed`));

function onPaymentConfirmed(paymentId) {
    resolve(paymentId);
}

setTimeout(() => onPaymentConfirmed('PAY-1042'), 100);
// Payment PAY-1042 confirmed
