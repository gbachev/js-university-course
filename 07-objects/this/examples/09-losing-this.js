// A method stored in a variable and called on its own loses its this.
let user = {
    name: 'John Doe',
    greet() {
        console.log(this.name);
    }
};

let greetFn = user.greet;

// greetFn() is not called on user, so this is undefined in our module and reading
// this.name throws. (In a browser script that is not in strict mode, this is window.)
try {
    greetFn();
} catch (error) {
    console.log(error.name + ': ' + error.message);
    // TypeError: Cannot read properties of undefined (reading 'name')
}
