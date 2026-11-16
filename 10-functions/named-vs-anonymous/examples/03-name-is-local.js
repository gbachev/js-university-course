// The name of a named function expression exists only inside the function.
const sayHi = function greet() {
    console.log(typeof greet); // function
};

sayHi(); // logs the line above

console.log(typeof greet); // undefined
