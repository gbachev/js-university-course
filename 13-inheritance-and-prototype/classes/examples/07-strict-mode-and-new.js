// A class body runs in strict mode, and a class cannot be called without new.
class Person {
    constructor(name) {
        this.name = name;
    }

    whoAmI() {
        return this;
    }
}

const johnDoe = new Person('John Doe');
const whoAmI = johnDoe.whoAmI;

console.log(johnDoe.whoAmI() === johnDoe); // true
console.log(whoAmI()); // undefined

try {
    Person('Jane Doe');
} catch (error) {
    console.log(error.name + ': ' + error.message);
    // TypeError: Class constructor Person cannot be invoked without 'new'
}
