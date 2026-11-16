export const Discountable = (Base) => class extends Base {
    #percent = 0;

    setDiscount(percent) {
        if (percent < 0 || percent > 100) {
            throw new RangeError('Invalid discount');
        }
        this.#percent = percent;
    }

    get finalPrice() {
        return this.price - (this.price * this.#percent) / 100;
    }
};

export class Product {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
}

export class Course extends Discountable(Product) {
    constructor(title, price, lessons) {
        super(title, price);
        this.lessons = lessons;
    }
}
