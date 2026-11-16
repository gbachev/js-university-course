// console.group() indents everything until the matching console.groupEnd().
const cart = [
    { title: 'Keyboard', price: 49 },
    { title: 'Mouse', price: 25 },
];

console.group('Checkout');
console.log('Items:', cart.length);
console.group('Prices');
cart.forEach((item) => console.log(item.title, item.price));
console.groupEnd();
console.groupEnd();
// Checkout
//   Items: 2
//   Prices
//     Keyboard 49
//     Mouse 25
