// Task 2: Guard against a missing new
// Lecture: Constructor Functions
//
// Somewhere in our shop, someone wrote Order(42, 99.5) without new. This file is a
// module, so it runs in strict mode, and the call threw the vague
// "TypeError: Cannot set properties of undefined (setting 'id')". Finish the
// constructor function Order(id, total): when it is called without new, it throws a
// TypeError with the message 'Order must be called with new'. Called with new, it
// stores id and total on the order. Its summary() method, already on
// Order.prototype, keeps working.
//
// Examples:
//   new Order(42, 99.5).summary()   // 'Order 42: 99.50 EUR'
//   Order(42, 99.5)                 // throws TypeError: Order must be called with new
//
// Run the tests: npm test -- 13-inheritance-and-prototype/constructor-functions

export function Order(id, total) {
    this.id = id;
    this.total = total;
}

Order.prototype.summary = function () {
    return `Order ${this.id}: ${this.total.toFixed(2)} EUR`;
};
