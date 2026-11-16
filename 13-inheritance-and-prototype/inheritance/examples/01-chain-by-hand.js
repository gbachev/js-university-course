// A three-level chain built with __proto__ keys in object literals.
const person = {
    greet() {
        return `Hi, I'm ${this.name}`;
    }
};

const employee = {
    __proto__: person,
    company: 'Acme',
    work() {
        return `${this.name} works at ${this.company} as a ${this.role}`;
    }
};

const johnDoe = {
    __proto__: employee,
    name: 'John Doe',
    role: 'developer'
};

console.log(johnDoe.greet()); // Hi, I'm John Doe
console.log(johnDoe.work()); // John Doe works at Acme as a developer
console.log(Object.getPrototypeOf(johnDoe) === employee); // true
console.log(Object.getPrototypeOf(employee) === person); // true
