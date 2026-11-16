export function addVat(price) {
    // Work in cents, round, and go back to the currency.
    return Math.round(price * 1.2 * 100) / 100;
}
