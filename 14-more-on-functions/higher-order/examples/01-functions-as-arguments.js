// greet is a higher-order function: it takes the formatter function.
function greet(name, formatter) {
    return 'Hello, ' + formatter(name);
}

function upperCase(str) {
    return str.toUpperCase();
}

console.log(greet('Jane Doe', upperCase)); // Hello, JANE DOE
