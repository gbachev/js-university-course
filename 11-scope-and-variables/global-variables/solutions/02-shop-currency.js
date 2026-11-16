export function getCurrency() {
    const currency = globalThis.shopCurrency;

    if (typeof currency === 'string' && currency !== '') {
        return currency;
    }

    return 'EUR';
}
