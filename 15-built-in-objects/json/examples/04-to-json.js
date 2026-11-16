// toJSON(): an object decides how it is serialized.
class Cart {
    constructor() {
        this.items = new Map();
    }

    add(product, quantity) {
        this.items.set(product, quantity);
    }

    toJSON() {
        return { items: Object.fromEntries(this.items) };
    }
}

const cart = new Cart();
cart.add('notebook', 2);
cart.add('pen', 5);

console.log(JSON.stringify(cart)); // {"items":{"notebook":2,"pen":5}}
console.log(JSON.stringify({ placedAt: new Date('2026-11-15T09:30:00Z') }));
// {"placedAt":"2026-11-15T09:30:00.000Z"}
