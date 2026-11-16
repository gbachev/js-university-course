// Any object with a render() method can be an invoice line.
class ProductLine {
    constructor(title, price, quantity) {
        this.title = title;
        this.price = price;
        this.quantity = quantity;
    }

    render() {
        return `${this.title} x${this.quantity}: ${(this.price * this.quantity).toFixed(2)}`;
    }
}

function discount(percent) {
    return {
        render: () => `Discount: -${percent}%`
    };
}

const shipping = {
    render() {
        return 'Shipping: 4.99';
    }
};

const lines = [new ProductLine('Desk lamp', 24.5, 2), discount(10), shipping];

for (const line of lines) {
    console.log(line.render());
}
// Desk lamp x2: 49.00
// Discount: -10%
// Shipping: 4.99

console.log(shipping instanceof ProductLine); // false
console.log(typeof shipping.render === 'function'); // true

const giftNote = { text: 'Gift wrap, please' };

console.log(typeof giftNote.render === 'function'); // false

try {
    giftNote.render();
} catch (error) {
    console.log(error.name + ': ' + error.message);
    // TypeError: giftNote.render is not a function
}
