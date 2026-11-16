// An Employee inherits the fields and the methods of a Person.
function Person(name, email) {
    this.name = name;
    this.email = email;
}

Person.prototype.greet = function () {
    return `Hi, I am ${this.name}`;
};

function Employee(name, email, role) {
    Person.call(this, name, email);
    this.role = role;
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

Employee.prototype.describe = function () {
    return `${this.greet()}, ${this.role}`;
};

const janeDoe = new Employee('Jane Doe', 'jane@example.com', 'developer');

console.log(janeDoe.describe()); // Hi, I am Jane Doe, developer
console.log(Object.hasOwn(janeDoe, 'email')); // true
console.log(janeDoe instanceof Employee); // true
console.log(janeDoe instanceof Person); // true
console.log(janeDoe.constructor === Employee); // true
