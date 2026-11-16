// We pass a function to another function, and that function calls it.
function processUserInput(callback) {
    const name = 'Jane';
    callback(name);
}

processUserInput(function(name) {
    console.log(`Welcome, ${name}!`);
}); // Welcome, Jane!
