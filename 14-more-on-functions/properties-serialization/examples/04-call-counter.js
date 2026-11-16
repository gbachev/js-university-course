// A function is an object, so it can hold a property of our own.
function addToCart(product) {
    addToCart.calls++;
    return `${product} added`;
}
addToCart.calls = 0;

addToCart('Book');
addToCart('Pen');
console.log(addToCart.calls); // 2
