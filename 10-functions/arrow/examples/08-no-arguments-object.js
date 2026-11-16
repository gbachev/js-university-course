// An arrow function has no arguments of its own: it sees the one of the function
// around it. Node prints it as below, a browser console as Arguments(2) ['a', 'b'].
function outer() {
    const inner = () => {
        console.log(arguments);
    };
    inner(1, 2, 3);
}

outer('a', 'b'); // [Arguments] { '0': 'a', '1': 'b' }

// With no function around it, there is no arguments to see. In our module, and in a
// browser script, that throws a ReferenceError. (A .cjs file is different: Node wraps
// it in a function, so arguments there are the arguments of that wrapper.)
const willThrowError = () => {
    console.log(arguments);
};

try {
    willThrowError(1, 2, 3);
} catch (error) {
    console.log(error.name + ': ' + error.message);
    // ReferenceError: arguments is not defined
}
