// A method on Person.prototype is shared by every object new Person creates.
function Person(name) {
    this.name = name;
}

Person.prototype.greet = function () {
    return `Hi, I'm ${this.name}`;
};

const john = new Person('John');
console.log(john.greet()); // Hi, I'm John
console.log(john.hasOwnProperty('greet')); // false - it lives on Person.prototype
