// An empty child class still gets the parent's constructor and methods.
class Person {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    greet() {
        return `Hi, I am ${this.name}`;
    }
}

class Employee extends Person {}

const janeDoe = new Employee('Jane Doe', 'jane@example.com');

console.log(janeDoe.greet()); // Hi, I am Jane Doe
console.log(janeDoe instanceof Employee); // true
console.log(janeDoe instanceof Person); // true
console.log(janeDoe.constructor === Employee); // true
console.log(Object.getPrototypeOf(Employee.prototype) === Person.prototype); // true
