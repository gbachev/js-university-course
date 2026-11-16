// const for a function we assign to a variable: the binding cannot be reassigned.
const greet = function() {
    console.log('Hello!');
};

greet(); // Hello!

try {
    greet = function() {};
} catch (error) {
    console.log(error.name + ': ' + error.message);
    // TypeError: Assignment to constant variable.
}
