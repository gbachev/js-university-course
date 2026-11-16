// A NodeList has forEach(), an HTMLCollection does not. Array.from() gives us map().
const products = document.querySelectorAll('.product');

products.forEach((product, index) => {
    console.log(index, product.className);
});
// 0 product
// 1 product sale
// 2 product

console.log(products.map); // undefined

const names = Array.from(document.querySelectorAll('.name'), (el) => el.textContent);
console.log(names);
// ['Clean Code', 'Eloquent JavaScript', 'Refactoring']

const items = document.getElementsByTagName('li');
console.log(items.forEach); // undefined
for (const item of items) {
    console.log(item.className);
}
// product
// product sale
// product
