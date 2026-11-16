const user = {
    name: 'John',
    greet() {
        console.log(this.name);
    }
};

user.greet(); // John (this === user)

const greetFn = user.greet;

// In our module, which is strict, this is undefined in greetFn(), so reading this.name
// throws. In sloppy mode this would be the global object and we would get undefined.
try {
    greetFn();
} catch (error) {
    console.log(error.name + ': ' + error.message);
    // TypeError: Cannot read properties of undefined (reading 'name')
}
