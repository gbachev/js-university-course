try {
    hello(); // ReferenceError (TDZ)
} catch (error) {
    console.log(error.name + ': ' + error.message);
    // ReferenceError: Cannot access 'hello' before initialization
}

const hello = () => console.log('Hi');
