export class Cart extends EventTarget {
    constructor(items = []) {
        super();
        this.items = items;
    }

    remove(id) {
        const item = this.items.find((entry) => entry.id === id);
        if (!item) {
            return false;
        }

        // Without cancelable: true, preventDefault() in a listener would be ignored.
        const event = new CustomEvent('cart:remove', { detail: { item }, cancelable: true });
        if (!this.dispatchEvent(event)) {
            return false;
        }

        this.items = this.items.filter((entry) => entry.id !== id);
        this.notify();
        return true;
    }

    notify() {
        const total = this.items.reduce((sum, item) => sum + item.price, 0);
        const detail = { items: this.items, total };
        this.dispatchEvent(new CustomEvent('cart:updated', { detail }));
    }
}
