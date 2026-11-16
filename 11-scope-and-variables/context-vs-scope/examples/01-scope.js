let x = 1;

function demo() {
    let y = 2;
    console.log(x); // 1
}

demo();

try {
    console.log(y); // ReferenceError
} catch (error) {
    console.log(error.name + ': ' + error.message);
    // ReferenceError: y is not defined
}
