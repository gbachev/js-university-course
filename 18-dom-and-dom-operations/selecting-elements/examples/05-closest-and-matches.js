// closest() walks up through the ancestors, matches() tests the element itself.
const button = document.querySelector('.sale button');

const card = button.closest('.product');
console.log(card.querySelector('.name').textContent);
// Eloquent JavaScript
console.log(card.matches('.sale')); // true
console.log(button.matches('.product')); // false

console.log(button.closest('ul').id); // products
console.log(button.closest('form')); // null
console.log(card.closest('.product') === card); // true
