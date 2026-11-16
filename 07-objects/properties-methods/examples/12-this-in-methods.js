// Inside a method, this is the object, so a method can use the other properties.
let user = {
    name: 'John',
    bornIn: 2000,
    age() {
        // Gets the current year and subtracts the year of birth
        return new Date().getFullYear() - this.bornIn;
    },
    greet() {
        console.log(`Hello, I am ${this.name} and I am ${this.age()} years old`);
    }
};

user.greet(); // Hello, I am John and I am 26 years old (in 2026)
