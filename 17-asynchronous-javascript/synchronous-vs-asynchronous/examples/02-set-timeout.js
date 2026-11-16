// setTimeout() starts a timer and returns at once, so the thank-you prints first.
console.log('Order placed');

setTimeout(() => {
    console.log('Confirmation email sent');
}, 1000);

console.log('Thank you for shopping');

// Order placed
// Thank you for shopping
// Confirmation email sent (1 second later)
