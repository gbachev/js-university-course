function greet(userName) {
    console.log('Hello, ' + userName);
}

greet('John'); // Hello, John

try {
    console.log(userName); // ReferenceError
} catch (error) {
    console.log(error.name + ': ' + error.message);
    // ReferenceError: userName is not defined
}
