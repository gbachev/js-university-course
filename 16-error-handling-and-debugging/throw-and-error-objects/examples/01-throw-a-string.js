// throw accepts any value, but a string carries no stack. Bad practice.
function chargeCard(amount) {
    if (amount <= 0) {
        throw 'Invalid amount';
    }
    return `Charged ${amount}`;
}

try {
    chargeCard(0);
} catch (error) {
    console.log(error); // Invalid amount
    console.log(error instanceof Error); // false
    console.log(error.stack); // undefined
}
