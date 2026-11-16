export class Product {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }

    describe() {
        return `${this.title} - ${this.price} EUR`;
    }
}

export class DigitalProduct extends Product {
    constructor(title, price, fileSizeInMb) {
        // super() first: until it returns, there is no this.
        super(title, price);
        this.fileSizeInMb = fileSizeInMb;
    }
}
