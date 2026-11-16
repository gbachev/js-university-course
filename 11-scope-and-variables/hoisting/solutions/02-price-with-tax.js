const taxRate = 0.2;

export function priceWithTax(price, country) {
    // a local name of its own, so the outer taxRate stays visible
    const rate = country === 'US' ? 0 : taxRate;

    return price + price * rate;
}
