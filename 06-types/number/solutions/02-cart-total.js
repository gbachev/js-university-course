export function cartTotal(price, quantity) {
    // Work in cents, round, and go back to the currency.
    return Math.round(price * quantity * 100) / 100;
}
