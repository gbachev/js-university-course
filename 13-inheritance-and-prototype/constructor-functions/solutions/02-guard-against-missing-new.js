export function Order(id, total) {
    if (!new.target) {
        throw new TypeError('Order must be called with new');
    }
    this.id = id;
    this.total = total;
}

Order.prototype.summary = function () {
    return `Order ${this.id}: ${this.total.toFixed(2)} EUR`;
};
