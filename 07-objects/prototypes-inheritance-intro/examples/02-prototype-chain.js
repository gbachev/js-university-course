// Object.getPrototypeOf() shows the next link of the chain. The chain ends with null.
const user = {
    name: 'John'
};

console.log(Object.getPrototypeOf(user) === Object.prototype); // true
console.log(Object.getPrototypeOf(Object.prototype)); // null - the end of the chain

// Object.create() sets the prototype of a new object.
const admin = Object.create(user);
console.log(admin.name); // John - found one link up the chain, on user
console.log(Object.getPrototypeOf(admin) === user); // true
