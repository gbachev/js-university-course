// Our own toString() is used whenever an order is converted to a string.
class Order {
    constructor(id, total) {
        this.id = id;
        this.total = total;
    }

    toString() {
        return `Order #${this.id} (${this.total.toFixed(2)} EUR)`;
    }
}

const first = new Order(42, 99.5);
const second = new Order(43, 12);

console.log(`Thanks for ${first}`); // Thanks for Order #42 (99.50 EUR)
console.log(String(second)); // Order #43 (12.00 EUR)
console.log([first, second].join(' | ')); // Order #42 (99.50 EUR) | Order #43 (12.00 EUR)
console.log(first); // Order { id: 42, total: 99.5 }
