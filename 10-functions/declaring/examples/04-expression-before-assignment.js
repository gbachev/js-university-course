// A function expression is not hoisted like a declaration. With const, the variable
// cannot be used before its line runs, so the call throws a ReferenceError.
try {
    console.log(divide(10, 2));
} catch (error) {
    console.log(error.name + ': ' + error.message);
    // ReferenceError: Cannot access 'divide' before initialization
}

const divide = function(a, b) {
    return a / b;
};

// With var instead, the variable exists from the start but holds undefined, so calling
// it throws a TypeError.
try {
    console.log(half(10));
} catch (error) {
    console.log(error.name + ': ' + error.message);
    // TypeError: half is not a function
}

var half = function(a) {
    return a / 2;
};
