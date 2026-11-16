// querySelector() returns the first match, querySelectorAll() all of them.
const first = document.querySelector('#products .name');
console.log(first.textContent); // Clean Code

const onSale = document.querySelector('li.sale .name');
console.log(onSale.textContent); // Eloquent JavaScript

const option = document.querySelector('input:checked');
console.log(option.name); // gift

const products = document.querySelectorAll('.product');
console.log(products.length); // 3
console.log(products[1].className); // product sale
