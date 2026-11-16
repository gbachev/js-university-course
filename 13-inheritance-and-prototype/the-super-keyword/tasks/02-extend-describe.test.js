import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { Product, DigitalProduct } = await import(
    process.env.SOLUTIONS ? '../solutions/02-extend-describe.js' : './02-extend-describe.js'
);

test('a digital product describes itself as a download', () => {
    assert.equal(
        new DigitalProduct('JS course', 49, 120).describe(),
        'JS course - 49 EUR (download, 120 MB)'
    );
});

test('the description follows a changed price', () => {
    const course = new DigitalProduct('JS course', 49, 120);
    course.price = 39;
    assert.equal(course.describe(), 'JS course - 39 EUR (download, 120 MB)');
});

test('an ordinary product keeps its short description', () => {
    assert.equal(new Product('Desk lamp', 25).describe(), 'Desk lamp - 25 EUR');
});

test('the override builds on the description of Product', () => {
    const original = Product.prototype.describe;
    Product.prototype.describe = function () {
        return `${this.title} for ${this.price} EUR`;
    };
    try {
        assert.equal(
            new DigitalProduct('JS course', 49, 120).describe(),
            'JS course for 49 EUR (download, 120 MB)'
        );
    } finally {
        Product.prototype.describe = original;
    }
});
