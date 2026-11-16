// extends also links the classes, so static methods are inherited.
class Person {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    static byName(a, b) {
        return a.name.localeCompare(b.name);
    }
}

class Employee extends Person {
    constructor(name, email, role) {
        super(name, email);
        this.role = role;
    }
}

const team = [
    new Employee('John Doe', 'john@example.com', 'designer'),
    new Employee('Jane Doe', 'jane@example.com', 'developer')
];

team.sort(Employee.byName);

console.log(team.map((employee) => employee.name)); // [ 'Jane Doe', 'John Doe' ]
console.log(Object.hasOwn(Employee, 'byName')); // false
console.log(Object.getPrototypeOf(Employee) === Person); // true
