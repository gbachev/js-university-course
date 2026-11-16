// Touching this before super() throws a ReferenceError.
class Person {
    constructor(name) {
        this.name = name;
    }
}

class Employee extends Person {
    constructor(name, role) {
        this.role = role;
        super(name);
    }
}

try {
    const janeDoe = new Employee('Jane Doe', 'developer');
} catch (error) {
    console.log(error.name + ': ' + error.message);
    // ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
}
