// The price is stored in cents and read and written in euros.
class Product {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }

    get price() {
        return this.priceInCents / 100;
    }

    set price(value) {
        this.priceInCents = Math.round(value * 100);
    }
}

const lamp = new Product('Desk lamp', 24.5);

console.log(lamp.price); // 24.5
console.log(lamp.priceInCents); // 2450

lamp.price = 19.99;

console.log(lamp.priceInCents); // 1999
console.log(Object.keys(lamp)); // [ 'title', 'priceInCents' ]
console.log(Object.hasOwn(Product.prototype, 'price')); // true
