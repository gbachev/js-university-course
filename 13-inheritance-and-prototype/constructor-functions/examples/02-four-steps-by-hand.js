// The four steps of new, done by hand with Object.create() and call().
function Product(title, price) {
    this.title = title;
    this.price = price;
}

function construct(Constructor, ...args) {
    const instance = Object.create(Constructor.prototype); // steps 1 and 2
    Constructor.call(instance, ...args); // step 3
    return instance; // step 4
}

const lamp = construct(Product, 'Desk lamp', 25);

console.log(lamp.title); // Desk lamp
console.log(lamp instanceof Product); // true
