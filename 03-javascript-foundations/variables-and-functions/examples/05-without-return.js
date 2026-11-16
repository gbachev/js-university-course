// Printing a value is not returning it.
function printGreeting(name) {
    console.log('Hello, ' + name + '!');
}

const result = printGreeting('John Doe'); // Hello, John Doe!
console.log(result); // undefined
