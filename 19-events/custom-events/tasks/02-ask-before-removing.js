// Task 2: Ask before removing
// Lecture: Custom Events and EventTarget
//
// Some items should not leave the cart without a word, like a gift card the shop
// already sent by email. The cart itself does not know these rules, so remove(id) asks
// first: it dispatches a CustomEvent "cart:remove" with { item } in its detail, which
// a listener can cancel with preventDefault(). When nobody cancels, the item goes and
// "cart:updated" follows, as before, and remove() returns true. When a listener cancels,
// the item stays, no "cart:updated" is dispatched, and remove() returns false. An id
// that is not in the cart returns false and dispatches nothing. Change remove().
//
// Examples:
//   cart.remove('mug')         // true, the mug is gone
//   cart.remove('gift-card')   // false when a listener cancels "cart:remove"
//
// Run the tests: npm test -- 19-events/custom-events

export class Cart extends EventTarget {
    constructor(items = []) {
        super();
        this.items = items;
    }

    remove(id) {
        this.items = this.items.filter((item) => item.id !== id);
        this.notify();
        return true;
    }

    notify() {
        const total = this.items.reduce((sum, item) => sum + item.price, 0);
        const detail = { items: this.items, total };
        this.dispatchEvent(new CustomEvent('cart:updated', { detail }));
    }
}
