// An arrow function has no this of its own, so it is a poor choice for a method.
let user = {
    name: 'Jane Doe',
    greet: () => {
        console.log(`Hello, I am ${this.name}`);
    }
};

// The arrow function takes this from the top level of the file. In our module that is
// undefined, so reading this.name throws. (In a browser script this is window instead,
// and we get the window's name (usually an empty string), not Jane Doe.)
try {
    user.greet();
} catch (error) {
    console.log(error.name + ': ' + error.message);
    // TypeError: Cannot read properties of undefined (reading 'name')
}
