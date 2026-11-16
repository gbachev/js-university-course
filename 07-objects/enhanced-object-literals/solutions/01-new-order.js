export function createOrder(id, customer, total) {
    return {
        id,
        customer,
        total,
        describe() {
            return `Order ${this.id} for ${this.customer}: ${this.total} EUR`;
        },
    };
}
