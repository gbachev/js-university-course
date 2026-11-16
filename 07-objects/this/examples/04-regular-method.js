// The same object with a regular method: this is user.
let user = {
    name: 'Jane Doe',
    greet() {
        console.log(`Hello, I am ${this.name}`);
    }
};

user.greet(); // Hello, I am Jane Doe
