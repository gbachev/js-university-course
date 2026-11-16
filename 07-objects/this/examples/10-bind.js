// bind returns a new function whose this is always user.
let user = {
    name: 'John Doe',
    greet() {
        console.log(this.name);
    }
};

let greetFn = user.greet.bind(user);
greetFn(); // John Doe
