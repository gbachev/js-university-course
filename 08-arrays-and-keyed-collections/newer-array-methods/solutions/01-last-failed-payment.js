export function latestPayment(payments) {
    return payments.at(-1);
}

export function lastPaymentWithStatus(payments, status) {
    return payments.findLast(payment => payment.status === status);
}
