// Every call pushes a frame on the call stack, every return removes it.
function getTax(amount) {
    return amount * 0.2;
}

function getTotal(price, quantity) {
    const subtotal = price * quantity;
    return subtotal + getTax(subtotal);
}

function checkout() {
    const total = getTotal(25, 2);
    return `Total: ${total}`;
}

console.log(checkout()); // Total: 60
