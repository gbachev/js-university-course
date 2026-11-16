// A class cannot be used before its declaration: it is in the temporal dead zone.
try {
    const johnDoe = new Person('John Doe');
} catch (error) {
    console.log(error.name + ': ' + error.message);
    // ReferenceError: Cannot access 'Person' before initialization
}

class Person {
    constructor(name) {
        this.name = name;
    }
}
