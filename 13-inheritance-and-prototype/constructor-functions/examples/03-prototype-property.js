// Person.prototype becomes the [[Prototype]] of every person new creates.
function Person(name, email) {
    this.name = name;
    this.email = email;
}

Person.prototype.greet = function () {
    return `Hi, I am ${this.name}`;
};

const johnDoe = new Person('John Doe', 'john@example.com');

console.log(johnDoe.greet()); // Hi, I am John Doe
console.log(Object.getPrototypeOf(johnDoe) === Person.prototype); // true
console.log(Object.hasOwn(johnDoe, 'name')); // true
console.log(Object.hasOwn(johnDoe, 'greet')); // false
console.log(johnDoe.prototype); // undefined
console.log(Person.prototype.constructor === Person); // true
console.log(johnDoe.constructor === Person); // true
