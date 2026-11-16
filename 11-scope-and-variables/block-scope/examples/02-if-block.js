if (true) {
    let message = 'Hello';
}

try {
    console.log(message); // ReferenceError
} catch (error) {
    console.log(error.name + ': ' + error.message);
    // ReferenceError: message is not defined
}
