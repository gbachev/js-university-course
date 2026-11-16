// A factory: priceAbove(limit) returns a test for filter() that remembers its limit.
function priceAbove(limit) {
    return function(product) {
        return product.price > limit;
    };
}

const products = [
    { name: 'Keyboard', price: 45 },
    { name: 'Cable', price: 9 },
    { name: 'Monitor', price: 180 }
];

const over20 = priceAbove(20);
console.log(typeof over20); // function
console.log(products.filter(over20).length); // 2

const premium = products.filter(priceAbove(100));
console.log(premium[0].name); // Monitor
