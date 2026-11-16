// Inside a method, this is the object, so a method can use the other properties.
let user = {
    name: 'John',
    bornIn: 2000,
    ageIn(year) {
        return year - this.bornIn; // subtracts the year of birth from the given year
    },
    greet() {
        console.log(`Hello, I am ${this.name} and in 2030 I will be ${this.ageIn(2030)} years old`);
    }
};

user.greet(); // Hello, I am John and in 2030 I will be 30 years old
