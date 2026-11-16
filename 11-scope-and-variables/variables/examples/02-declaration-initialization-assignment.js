var userName; // declaration
userName = 'John'; // assignment

let score; // declaration
score = 42; // assignment

console.log(userName, score); // John 42

// const must be declared and initialized in one step.
const initialized = 3.14; // OK
console.log(initialized); // 3.14

// The next line is a SyntaxError, and then the file does not run at all.
// Remove the // in front of it to see it.
// const notInitialized; // SyntaxError: Missing initializer in const declaration
