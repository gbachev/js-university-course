// Object.getPrototypeOf() reads the hidden [[Prototype]] link.
const user = {
    name: 'John Doe',
    email: 'john@example.com'
};

const proto = Object.getPrototypeOf(user);

console.log(proto === Object.prototype); // true
console.log(Object.getPrototypeOf(proto)); // null

const cart = ['book', 'pen'];

console.log(Object.getPrototypeOf(cart) === Array.prototype); // true
console.log(Object.getPrototypeOf(Array.prototype) === Object.prototype); // true
