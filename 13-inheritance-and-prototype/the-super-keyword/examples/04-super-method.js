// An override extends the parent's method with super.greet().
class Person {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    greet() {
        return `Hi, I am ${this.name}`;
    }
}

class Employee extends Person {
    constructor(name, email, role) {
        super(name, email);
        this.role = role;
    }

    greet() {
        return `${super.greet()} and I work as a ${this.role}`;
    }
}

const johnDoe = new Person('John Doe', 'john@example.com');
const janeDoe = new Employee('Jane Doe', 'jane@example.com', 'developer');

console.log(johnDoe.greet()); // Hi, I am John Doe
console.log(janeDoe.greet()); // Hi, I am Jane Doe and I work as a developer
