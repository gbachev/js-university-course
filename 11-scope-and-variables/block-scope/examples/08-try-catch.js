try {
    throw new Error('oops');
} catch (e) {
    console.log(e); // works: Error: oops, followed by where it was thrown
}

try {
    console.log(e); // ReferenceError
} catch (error) {
    console.log(error.name + ': ' + error.message);
    // ReferenceError: e is not defined
}
