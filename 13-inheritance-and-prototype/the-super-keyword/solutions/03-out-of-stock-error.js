export class OutOfStockError extends Error {
    constructor(title, requested, available) {
        super(`Only ${available} of ${title} left, ${requested} requested`);
        this.name = 'OutOfStockError';
        this.title = title;
        this.requested = requested;
        this.available = available;
    }
}
