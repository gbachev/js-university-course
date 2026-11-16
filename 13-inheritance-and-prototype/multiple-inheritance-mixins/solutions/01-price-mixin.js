export const priced = {
    formatPrice() {
        return `${this.price.toFixed(2)} EUR`;
    },
    withTax(rate) {
        return Math.round(this.price * (1 + rate) * 100) / 100;
    }
};

export class Book {
    constructor(title, author, price) {
        this.title = title;
        this.author = author;
        this.price = price;
    }
}

export class Course {
    constructor(title, price, lessons) {
        this.title = title;
        this.price = price;
        this.lessons = lessons;
    }
}

Object.assign(Book.prototype, priced);
Object.assign(Course.prototype, priced);
