function greet(name) {
    console.log('Hello, ' + name);
}

greet('John'); // Hello, John

try {
    console.log(name); // ReferenceError
} catch (error) {
    console.log(error.name + ': ' + error.message);
    // ReferenceError: name is not defined
}
