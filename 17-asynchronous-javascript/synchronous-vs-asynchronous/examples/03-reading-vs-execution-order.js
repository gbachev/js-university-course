// Even a 0 ms timer waits for the code after it.
console.log('Load cart');

setTimeout(() => {
    console.log('Show recommendations');
}, 0);

console.log('Render cart');

// Load cart
// Render cart
// Show recommendations
