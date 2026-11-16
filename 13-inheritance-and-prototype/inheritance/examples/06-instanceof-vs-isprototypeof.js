// isPrototypeOf() takes any object; instanceof needs a constructor on the right.
const person = {
    greet() {
        return `Hi, I'm ${this.name}`;
    }
};

const johnDoe = { __proto__: person, name: 'John Doe' };

console.log(person.isPrototypeOf(johnDoe)); // true
console.log(johnDoe.isPrototypeOf(person)); // false
console.log(Object.prototype.isPrototypeOf(johnDoe)); // true
console.log(johnDoe instanceof Object); // true

try {
    console.log(johnDoe instanceof person);
} catch (error) {
    console.log(error.name + ': ' + error.message);
    // TypeError: Right-hand side of 'instanceof' is not callable
}
