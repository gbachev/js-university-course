{
    let a = 1;
    const b = 2;
}

try {
    console.log(a); // ReferenceError
} catch (error) {
    console.log(error.name + ': ' + error.message);
    // ReferenceError: a is not defined
}

try {
    console.log(b); // ReferenceError
} catch (error) {
    console.log(error.name + ': ' + error.message);
    // ReferenceError: b is not defined
}
