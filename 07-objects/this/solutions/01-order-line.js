export function createOrderLine(name, price, quantity) {
    return {
        name,
        price,
        quantity,
        total() {
            return this.price * this.quantity;
        },
        describe() {
            return `${this.name} x ${this.quantity} = ${this.total()} EUR`;
        },
    };
}
