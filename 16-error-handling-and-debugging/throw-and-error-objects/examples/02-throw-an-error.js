// The same function throwing an Error object.
function chargeCard(amount) {
    if (amount <= 0) {
        throw new Error(`Invalid amount: ${amount}`);
    }
    return `Charged ${amount}`;
}

try {
    chargeCard(0);
} catch (error) {
    console.log(error.name); // Error
    console.log(error.message); // Invalid amount: 0
    console.log(String(error)); // Error: Invalid amount: 0
    console.log(error.stack);
    // Error: Invalid amount: 0
    //     at chargeCard (file:///.../02-throw-an-error.js:4:15)
    //     at file:///.../02-throw-an-error.js:10:5
    // (Node prints the full path and adds frames of its own.)
}
