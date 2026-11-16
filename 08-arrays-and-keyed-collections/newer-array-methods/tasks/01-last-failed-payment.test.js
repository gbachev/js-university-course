import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { latestPayment, lastPaymentWithStatus } = await import(
    process.env.SOLUTIONS
        ? '../solutions/01-last-failed-payment.js'
        : './01-last-failed-payment.js'
);

function makePayments() {
    return [
        { id: 1, status: 'failed' },
        { id: 2, status: 'paid' },
        { id: 3, status: 'failed' },
        { id: 4, status: 'paid' },
    ];
}

test('the latest payment is the last one in the array', () => {
    const payments = makePayments();
    assert.equal(latestPayment(payments), payments[3]);
});

test('there is no latest payment when there are no payments', () => {
    assert.equal(latestPayment([]), undefined);
});

test('the newest payment with the status is found, not the first one', () => {
    const payments = makePayments();
    assert.equal(lastPaymentWithStatus(payments, 'failed'), payments[2]);
    assert.equal(lastPaymentWithStatus(payments, 'paid'), payments[3]);
});

test('a status no payment has gives undefined', () => {
    assert.equal(lastPaymentWithStatus(makePayments(), 'refunded'), undefined);
});

test('the payments keep their order', () => {
    const payments = makePayments();
    latestPayment(payments);
    lastPaymentWithStatus(payments, 'failed');
    assert.deepEqual(payments, makePayments());
});
