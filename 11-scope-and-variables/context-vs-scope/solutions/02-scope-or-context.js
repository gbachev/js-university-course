const currency = 'EUR';

export function createPrice(amount) {
    return {
        amount,
        label() {
            // currency from the scope, the amount from the object before the dot.
            return this.amount.toFixed(2) + ' ' + currency;
        },
    };
}
