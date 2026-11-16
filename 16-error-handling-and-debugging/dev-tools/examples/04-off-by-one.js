// Throws on purpose and nothing catches it: in Node the file stops here with exit code 1.
function cartTotal(items) {
    let total = 0;
    for (let i = 0; i <= items.length; i++) {
        total = total + items[i].price;
    }
    return total;
}

console.log(cartTotal([{ price: 10 }, { price: 5 }]));
// TypeError (Chrome's wording):
// Cannot read properties of undefined (reading 'price')
