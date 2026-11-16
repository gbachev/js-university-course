// setTimeout and Math come from the global object, so we use them without importing.
console.log(Math.PI); // 3.141592653589793
setTimeout(() => console.log('Hi'), 1000); // Hi (a second later)
