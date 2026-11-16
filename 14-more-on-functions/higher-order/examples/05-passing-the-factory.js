// Passing the factory itself lets every product through, with no error.
const priceAbove = (limit) => (product) => product.price > limit;

const products = [
    { name: 'Keyboard', price: 45 },
    { name: 'Cable', price: 9 },
    { name: 'Monitor', price: 180 }
];

console.log(products.filter(priceAbove(20)).length); // 2
console.log(products.filter(priceAbove).length); // 3
