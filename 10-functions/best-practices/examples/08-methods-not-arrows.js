// Incorrect: arrow function as object method
const user = {
    name: 'Jane',
    greet: () => {
        console.log(`Hi, I'm ${this.name}`); // 'this' is not user
    }
};

// The arrow function takes this from the top level of the file. In our module that is
// undefined, so reading this.name throws. In a browser script this is window, and we
// get "Hi, I'm " followed by window.name, usually an empty string.
try {
    user.greet();
} catch (error) {
    console.log(error.name + ': ' + error.message);
    // TypeError: Cannot read properties of undefined (reading 'name')
}

// Correct: a regular method (here with the shorthand method syntax)
const userFixed = {
    name: 'Jane',
    greet() {
        console.log(`Hi, I'm ${this.name}`);
    }
};

userFixed.greet(); // Hi, I'm Jane
