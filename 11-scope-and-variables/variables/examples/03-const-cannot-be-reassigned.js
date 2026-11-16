const pi = 3.14;

try {
    pi = 3.1415; // TypeError
} catch (error) {
    console.log(error.name + ': ' + error.message);
    // TypeError: Assignment to constant variable.
}

console.log(pi); // 3.14
