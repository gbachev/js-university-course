// Plain JavaScript: runs in Node.js, in tests, on a server
function formatTotal(cart) {
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    return `Total: ${total.toFixed(2)} EUR`;
}

// A thin browser layer
function renderTotal(cart) {
    document.title = formatTotal(cart);
}

const cart = [{ title: 'Clean Code', price: 32.5, quantity: 1 }];

console.log(formatTotal(cart)); // Total: 32.50 EUR
try {
    renderTotal(cart);
} catch (error) {
    console.log(error.name + ': ' + error.message);
}
// Node.js: ReferenceError: document is not defined
