// The parameters we do not pass are undefined, and a function without a return
// statement returns undefined.
function myFunction(a, b) {
    console.log(a, b);
}

let returned = myFunction(); // undefined undefined
myFunction(1); // 1 undefined
myFunction(2); // 2 undefined
myFunction(undefined, 2); // undefined 2

console.log(returned); // undefined

// The void operator gives undefined, too.
console.log(void 0); // undefined
