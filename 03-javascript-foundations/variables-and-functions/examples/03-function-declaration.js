// A function declaration, called twice with different arguments.
function greet(name) {
    return 'Hello, ' + name + '!';
}

const message = greet('John Doe');
console.log(message); // Hello, John Doe!
console.log(greet('Jane Doe')); // Hello, Jane Doe!
