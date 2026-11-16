// In a method, this is the object the method is called on.
let user = {
    name: 'John Doe',
    greet() {
        console.log(`Hello, I am ${this.name}`);
    }
};

user.greet(); // Hello, I am John Doe
