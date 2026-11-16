export class OutOfStockError extends Error {
    constructor(sku, available) {
        super(`Only ${available} left of ${sku}`);
        this.name = 'OutOfStockError';
        this.sku = sku;
        this.available = available;
    }
}
