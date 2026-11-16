// Methods every object gets from Object.prototype.
const order = {
    id: 42,
    total: 99.5
};

console.log(order.hasOwnProperty('total')); // true
console.log(order.hasOwnProperty('toString')); // false
console.log(order.propertyIsEnumerable('id')); // true
console.log(order.valueOf() === order); // true
