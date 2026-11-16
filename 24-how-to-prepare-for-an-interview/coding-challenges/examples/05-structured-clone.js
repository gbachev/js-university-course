class Order {
    constructor(items) {
        this.items = items;
        this.createdAt = new Date('2026-11-16');
    }

    total() {
        return this.items.reduce((sum, item) => sum + item.price, 0);
    }
}

const order = new Order([{ title: 'Dune', price: 12 }]);
const copy = structuredClone(order);

copy.items[0].price = 20;
console.log(order.items[0].price); // 12
console.log(copy.createdAt instanceof Date); // true
console.log(copy instanceof Order); // false
console.log(typeof copy.total); // undefined

try {
    structuredClone({ onSave: () => {} });
} catch (error) {
    console.log(error.name); // DataCloneError
}
