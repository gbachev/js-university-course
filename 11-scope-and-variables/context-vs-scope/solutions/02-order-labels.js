export function createOrder(items, currency) {
    return {
        items,
        currency,
        labels() {
            // an arrow function has no this of its own, so it uses the this of labels()
            return this.items.map(
                (item) => `${item.name}: ${item.price.toFixed(2)} ${this.currency}`
            );
        },
    };
}
