const VAT_RATE = 20;

export function priceWithVat() {
    // VAT_RATE comes from the scope, the price from the object before the dot.
    return this.price + (this.price * VAT_RATE) / 100;
}

export function createProduct(name, price) {
    return { name, price, priceWithVat };
}
