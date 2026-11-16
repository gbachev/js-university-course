// The Person constructor function from the previous lecture.
function Person(name, email) {
    this.name = name;
    this.email = email;
}

Person.prototype.greet = function () {
    return `Hi, I am ${this.name}`;
};

const johnDoe = new Person('John Doe', 'john@example.com');

console.log(johnDoe.greet()); // Hi, I am John Doe
console.log(Object.keys(Person.prototype)); // [ 'greet' ]
