// setTimeout(callback, delay, ...args): the arguments after the delay go to the callback.
function hideToast(message) {
    console.log(`Hidden: ${message}`);
}

function showToast(message, seconds) {
    console.log(`Shown: ${message}`);
    setTimeout(hideToast, seconds * 1000, message);
}

showToast('Order placed', 2);
console.log('The page keeps working');

// Shown: Order placed
// The page keeps working
// Hidden: Order placed (2 seconds later)
