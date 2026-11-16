if (true) {
    var x = 10;
    let y = 20;
}

console.log(x); // 10

try {
    console.log(y); // ReferenceError
} catch (error) {
    console.log(error.name + ': ' + error.message);
    // ReferenceError: y is not defined
}
