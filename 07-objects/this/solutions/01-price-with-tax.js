export function priceWithTax(rate) {
    return this.price + (this.price * rate) / 100;
}

export function getPriceWithTax(product, rate) {
    return priceWithTax.call(product, rate);
}
