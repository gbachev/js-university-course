// toString() returns the source text, or [native code] for built-in functions.
const formatPrice = (amount) => /* 2 decimals */ amount.toFixed(2);
class Cart { items = []; }

console.log(formatPrice.toString());
// (amount) => /* 2 decimals */ amount.toFixed(2)
console.log(Cart.toString()); // class Cart { items = []; }
console.log(Math.max.toString());
// function max() { [native code] }
