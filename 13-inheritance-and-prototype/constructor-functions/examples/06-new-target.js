// new.target is the function in a call with new, and undefined in a plain call.
function Person(name) {
    if (!new.target) {
        throw new TypeError('Person must be called with new');
    }
    this.name = name;
}

const johnDoe = new Person('John Doe');

console.log(johnDoe.name); // John Doe

try {
    Person('Jane Doe');
} catch (error) {
    console.log(error.name + ': ' + error.message);
    // TypeError: Person must be called with new
}
