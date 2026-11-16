export class Product {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }

    toString() {
        return `${this.title} (${this.price.toFixed(2)} EUR)`;
    }
}
