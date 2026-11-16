let a;
console.log(typeof a === 'undefined'); // true
console.log(a === undefined); // true

// typeof does not throw for a variable that was never declared...
console.log(typeof notDeclared); // undefined (no ReferenceError)
// ...but reading it does. Uncomment the next line to see the error.
// console.log(notDeclared); // ReferenceError: notDeclared is not defined
