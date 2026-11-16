// The same Person written as a class: a constructor function and a prototype underneath.
class Person {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    greet() {
        return `Hi, I am ${this.name}`;
    }
}

const johnDoe = new Person('John Doe', 'john@example.com');

console.log(johnDoe.greet()); // Hi, I am John Doe
console.log(typeof Person); // function
console.log(Object.getPrototypeOf(johnDoe) === Person.prototype); // true
console.log(Person.prototype.constructor === Person); // true
console.log(Object.hasOwn(johnDoe, 'greet')); // false
console.log(Object.getOwnPropertyNames(Person.prototype)); // [ 'constructor', 'greet' ]
console.log(Object.keys(Person.prototype)); // []
