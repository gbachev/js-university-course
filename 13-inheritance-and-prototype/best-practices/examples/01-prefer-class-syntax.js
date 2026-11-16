// A class writes the prototypes for us; super() comes first in the child constructor.
class Person {
    constructor(name) {
        this.name = name;
    }

    greet() {
        return `Hi, I am ${this.name}`;
    }
}

class Employee extends Person {
    constructor(name, role) {
        super(name);
        this.role = role;
    }
}

const janeDoe = new Employee('Jane Doe', 'developer');

console.log(janeDoe.greet()); // Hi, I am Jane Doe
console.log(janeDoe.constructor === Employee); // true
