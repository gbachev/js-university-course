{
    let x = 1;
}

try {
    console.log(x); // ReferenceError
} catch (error) {
    console.log(error.name + ': ' + error.message);
    // ReferenceError: x is not defined
}

// Declaring the same let twice is a SyntaxError, and then the file does not run at all.
// Remove the // in front of the two lines to see it.
// let user = 'John';
// let user = 'Jane'; // SyntaxError: Identifier 'user' has already been declared
