// delay() wraps setTimeout() in a promise.
function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

console.log('Order placed');

delay(1000).then(() => {
    console.log('Confirmation email sent');
});

console.log('Thank you for shopping');

// Order placed
// Thank you for shopping
// Confirmation email sent (1 second later)
