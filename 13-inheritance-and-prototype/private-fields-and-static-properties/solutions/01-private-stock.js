export class InventoryItem {
    #stock;

    constructor(title, stock) {
        this.title = title;
        this.#stock = stock;
    }

    get stock() {
        return this.#stock;
    }

    remove(quantity) {
        if (quantity > this.#stock) {
            throw new RangeError('Not enough stock');
        }
        this.#stock -= quantity;
    }
}
