// data-product-id becomes dataset.productId. Every dataset value is a string.
const sale = document.querySelector('.sale');

console.log(sale.dataset.productId); // 102
console.log(sale.getAttribute('data-product-id')); // 102
console.log(sale.dataset.price + 2); // 282
console.log(Number(sale.dataset.price) + 2); // 30

sale.dataset.inCart = 1;
console.log(sale.getAttribute('data-in-cart')); // 1
console.log(sale.dataset.inCart === '1'); // true

const third = document.querySelector('[data-product-id="103"]');
console.log(third.firstElementChild.textContent); // Refactoring

const total = Array.from(
    document.querySelectorAll('[data-price]'),
    (el) => Number(el.dataset.price),
).reduce((sum, price) => sum + price, 0);
console.log(total); // 101.5
