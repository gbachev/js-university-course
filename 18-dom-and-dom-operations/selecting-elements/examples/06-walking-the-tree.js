// From one element we step up, down and across.
const sale = document.querySelector('.sale');

console.log(sale.parentElement.id); // products
console.log(sale.children.length); // 2
console.log(sale.firstElementChild.textContent);
// Eloquent JavaScript
console.log(sale.lastElementChild.nodeName); // BUTTON

const next = sale.nextElementSibling;
console.log(next.firstElementChild.textContent); // Refactoring
console.log(next.nextElementSibling); // null
console.log(sale.previousElementSibling.className); // product

console.log(sale.childNodes.length); // 5
console.log(sale.firstChild.nodeName); // #text
