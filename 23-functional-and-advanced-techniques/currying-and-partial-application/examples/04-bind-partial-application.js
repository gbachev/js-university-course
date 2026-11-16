// bind() fixes this and the first arguments: partial application, not currying.
function lineTotal(price, quantity, discount) {
    return price * quantity - discount;
}

const bookTotal = lineTotal.bind(null, 20);

console.log(bookTotal(3, 5)); // 55
console.log(bookTotal.length); // 2
console.log(bookTotal(3)); // NaN

const logCart = console.log.bind(console, '[cart]');
logCart('Dune added'); // [cart] Dune added
