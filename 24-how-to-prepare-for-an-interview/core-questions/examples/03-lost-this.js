'use strict';

const user = {
    name: 'John Doe',
    greet() {
        return `Hi, ${this.name}`;
    }
};

console.log(user.greet()); // Hi, John Doe

const greet = user.greet;
try {
    console.log(greet()); // TypeError
} catch (error) {
    console.log(error.name + ': ' + error.message);
    // TypeError: Cannot read properties of undefined (reading 'name')
}

// The fix: bind the method to its object.
const boundGreet = user.greet.bind(user);
console.log(boundGreet()); // Hi, John Doe
