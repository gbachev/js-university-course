// A declaration can be called before its line, a function expression cannot.
sayHello(); // Hi

function sayHello() {
    console.log('Hi');
}

try {
    greet();
} catch (error) {
    console.log(error.name + ': ' + error.message);
    // ReferenceError: Cannot access 'greet' before initialization
}

const greet = function() {
    console.log('Hello');
};
