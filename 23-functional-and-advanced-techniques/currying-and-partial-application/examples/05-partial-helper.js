// partial(): rest gathers the fixed arguments, spread passes them on.
const partial = (fn, ...fixed) =>
    (...rest) => fn(...fixed, ...rest);

const lineTotal = (price, quantity, discount) =>
    price * quantity - discount;

const bookTotal = partial(lineTotal, 20);
const threeBooks = partial(lineTotal, 20, 3);

console.log(bookTotal(3, 5)); // 55
console.log(threeBooks(5)); // 55
