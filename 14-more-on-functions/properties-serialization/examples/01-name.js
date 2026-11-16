// name holds the declared name, or the name inferred from the variable or property.
function calcTotal(items) {
    return items.length;
}
const applyDiscount = (price) => price * 0.9;
const cart = {
    checkout() {},
    clear: function () {}
};

console.log(calcTotal.name); // calcTotal
console.log(applyDiscount.name); // applyDiscount
console.log(cart.checkout.name); // checkout
console.log(cart.clear.name); // clear
