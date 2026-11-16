// One cart function as a plain function, curried by hand, and partially applied.
const lineTotal = (price, quantity, discount) =>
    price * quantity - discount;

const curriedTotal = price => quantity => discount =>
    price * quantity - discount;

const bookTotal = (quantity, discount) =>
    lineTotal(20, quantity, discount);

console.log(lineTotal(20, 3, 5)); // 55
console.log(curriedTotal(20)(3)(5)); // 55
console.log(bookTotal(3, 5)); // 55
