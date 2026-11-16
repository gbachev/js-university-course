// typeof checks the type before we call a string method on the value.
const input = 'john';

if (typeof input === 'string') {
    console.log(input.toUpperCase()); // JOHN
}

// typeof does not throw for a name that was never declared.
console.log(typeof notDeclared); // undefined (no ReferenceError)
