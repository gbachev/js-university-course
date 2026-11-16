{
    try {
        console.log(a); // ReferenceError
    } catch (error) {
        console.log(error.name + ': ' + error.message);
        // ReferenceError: Cannot access 'a' before initialization
    }
    let a = 5;
}

// The TDZ applies to const as well.
{
    try {
        console.log(b); // ReferenceError
    } catch (error) {
        console.log(error.name + ': ' + error.message);
        // ReferenceError: Cannot access 'b' before initialization
    }
    const b = 10;
}

// Even typeof throws in the TDZ.
{
    try {
        console.log(typeof c); // ReferenceError
    } catch (error) {
        console.log(error.name + ': ' + error.message);
        // ReferenceError: Cannot access 'c' before initialization
    }
    let c = 1;
}
