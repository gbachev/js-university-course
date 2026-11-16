// Task 2: A longer description
// Lecture: The super Keyword
//
// On the product page, a digital product should say that it is a download and how
// big it is. Override describe() in DigitalProduct: it returns the description of
// Product, from super.describe(), followed by ' (download, 120 MB)'. Ordinary
// products keep their short description.
//
// Examples:
//   new DigitalProduct('JS course', 49, 120).describe()
//   // 'JS course - 49 EUR (download, 120 MB)'
//   new Product('Desk lamp', 25).describe()
//   // 'Desk lamp - 25 EUR'
//
// Run the tests: npm test -- 13-inheritance-and-prototype/the-super-keyword

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
        super(title, price);
        this.fileSizeInMb = fileSizeInMb;
    }

    // Your code here
}
