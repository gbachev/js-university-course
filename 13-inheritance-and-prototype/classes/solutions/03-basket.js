export class Basket {
    items = [];
    currency = 'EUR';

    constructor(owner) {
        this.owner = owner;
    }

    add(title, price) {
        this.items.push({ title, price });
        return this;
    }

    get count() {
        return this.items.length;
    }

    get total() {
        return this.items.reduce((sum, item) => sum + item.price, 0);
    }
}
