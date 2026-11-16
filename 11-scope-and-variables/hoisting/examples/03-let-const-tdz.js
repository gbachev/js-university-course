try {
    console.log(x); // ReferenceError (TDZ)
} catch (error) {
    console.log(error.name + ': ' + error.message);
    // ReferenceError: Cannot access 'x' before initialization
}
let x = 5;

{
    try {
        console.log(y); // ReferenceError
    } catch (error) {
        console.log(error.name + ': ' + error.message);
        // ReferenceError: Cannot access 'y' before initialization
    }
    const y = 20;
}
