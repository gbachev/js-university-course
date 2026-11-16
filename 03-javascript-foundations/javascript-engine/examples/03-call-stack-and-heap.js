// cart lives in the heap; each function call gets a frame on the call stack.
function formatPrice(amount) {
    return amount.toFixed(2) + " EUR";
}

function printCart(cart) {
    console.log(cart.owner + ": " + formatPrice(cart.total));
}

const cart = { owner: "John Doe", total: 49.5 };

printCart(cart); // John Doe: 49.50 EUR
