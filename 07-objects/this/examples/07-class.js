// In a class, this works the same way as in a constructor function.
class User {
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log(`Hi, I am ${this.name}`);
    }
}

let user = new User('Jane Doe');
user.greet(); // Hi, I am Jane Doe
