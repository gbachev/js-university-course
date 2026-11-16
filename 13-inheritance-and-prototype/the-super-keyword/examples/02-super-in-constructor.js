// super(...) runs the parent's constructor, then the child adds its own data.
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

    describe() {
        return `${this.greet()}, ${this.role}`;
    }
}

const janeDoe = new Employee('Jane Doe', 'jane@example.com', 'developer');

console.log(janeDoe.describe()); // Hi, I am Jane Doe, developer
console.log(Object.keys(janeDoe)); // [ 'name', 'email', 'role' ]
