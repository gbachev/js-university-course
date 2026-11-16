// A class expression assigned to a variable takes its name.
const Order = class {
    constructor(id) {
        this.id = id;
    }
};

const order = new Order(42);

console.log(order.id); // 42
console.log(Order.name); // Order
console.log(typeof Order); // function
