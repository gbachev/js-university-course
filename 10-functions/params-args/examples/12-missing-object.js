// Destructuring undefined throws, so a call with no argument fails.
function show({ message }) {
    console.log(message);
}

try {
    show();
} catch (error) {
    console.log(error.name + ': ' + error.message);
    // TypeError: Cannot destructure property 'message' of 'undefined' as it is undefined.
}

// A default of {} for the whole parameter fixes it.
function showSafe({ message } = {}) {
    console.log(message);
}

showSafe(); // undefined
