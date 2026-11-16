export class Cart extends EventTarget {
    constructor() {
        super();
        this.items = [];
    }

    add(item) {
        this.items = [...this.items, item];
        this.notify();
    }

    remove(id) {
        this.items = this.items.filter((item) => item.id !== id);
        this.notify();
    }

    notify() {
        const total = this.items.reduce((sum, item) => sum + item.price, 0);
        const detail = { items: this.items, total };
        this.dispatchEvent(new CustomEvent('cart:updated', { detail }));
    }
}
