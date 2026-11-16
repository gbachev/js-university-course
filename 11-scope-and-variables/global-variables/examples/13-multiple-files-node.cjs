// main.js in the lecture. These files end in .cjs, so Node loads them with require,
// like the lecture does. Each file has its own top-level scope.
require('./13-file1.cjs');
require('./13-file2.cjs');

try {
    console.log(a); // ReferenceError: a is not defined
} catch (error) {
    console.log(error.name + ': ' + error.message);
    // ReferenceError: a is not defined
}

try {
    console.log(b); // ReferenceError: b is not defined
} catch (error) {
    console.log(error.name + ': ' + error.message);
    // ReferenceError: b is not defined
}
