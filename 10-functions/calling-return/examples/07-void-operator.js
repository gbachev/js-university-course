function doNothing() {
    return void 0; // explicitly returns undefined
}
console.log(doNothing()); // undefined - void 0 is a short way to write undefined

function doSomething() {
    return 'I did something!';
}

// The return value of doSomething is ignored via void outside of the function.
console.log(void doSomething()); // undefined

let a = 5;
console.log(void a); // undefined - void works on any expression, not only calls
