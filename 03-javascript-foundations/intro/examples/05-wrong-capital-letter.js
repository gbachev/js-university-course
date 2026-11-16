// The names the language gives us are case-sensitive too.
console.log('Hi!'); // Hi!

try {
    Console.log('Hi!');
} catch (error) {
    console.log(error.name + ': ' + error.message);
    // ReferenceError: Console is not defined
}
