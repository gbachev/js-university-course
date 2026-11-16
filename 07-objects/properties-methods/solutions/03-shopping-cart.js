export function createCart() {
    return {
        items: {},
        add(product, quantity) {
            if (product in this.items) {
                this.items[product] += quantity;
            } else {
                this.items[product] = quantity;
            }
            return this;
        },
        remove(product) {
            delete this.items[product];
            return this;
        },
        get totalItems() {
            let total = 0;
            for (let quantity of Object.values(this.items)) {
                total += quantity;
            }
            return total;
        },
    };
}
