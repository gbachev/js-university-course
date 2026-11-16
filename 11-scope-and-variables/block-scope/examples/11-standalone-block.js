// getToken() stands in for any function that gives us a value we need only briefly.
function getToken() {
    return 'abc123';
}

{
    const token = getToken();
    // use token here
    console.log(token); // abc123
}

// token is gone here
try {
    console.log(token);
} catch (error) {
    console.log(error.name + ': ' + error.message);
    // ReferenceError: token is not defined
}
