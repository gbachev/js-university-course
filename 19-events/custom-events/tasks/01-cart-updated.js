// Task 1: The cart tells everyone
// Lecture: Custom Events and EventTarget
//
// Our shop cart is a Cart object that extends EventTarget. add(item) and remove(id)
// change this.items and then call this.notify(). Finish notify(): it dispatches a
// CustomEvent "cart:updated" on the cart, with a detail object that holds the items
// and the total, the sum of their prices. The header counter, the cart page and the
// saving code each add their own listener, and the cart never needs to know them.
// The detail of an empty cart has no items and a total of 0.
//
// Examples:
//   cart.add({ id: 'mug', name: 'Mug', price: 12.5 })
//   // the listeners get event.detail: { items: [the mug], total: 12.5 }
//
// Run the tests: npm test -- 19-events/custom-events

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
        // Your code here
    }
}
