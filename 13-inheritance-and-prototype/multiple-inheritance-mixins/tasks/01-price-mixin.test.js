import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { priced, Book, Course } = await import(
    process.env.SOLUTIONS ? '../solutions/01-price-mixin.js' : './01-price-mixin.js'
);

test('a book formats its price', () => {
    assert.equal(new Book('Dune', 'Frank Herbert', 12.5).formatPrice(), '12.50 EUR');
});

test('a course formats its price', () => {
    assert.equal(new Course('JavaScript', 49, 120).formatPrice(), '49.00 EUR');
});

test('withTax adds the tax and rounds to cents', () => {
    assert.equal(new Book('Dune', 'Frank Herbert', 12.5).withTax(0.2), 15);
    assert.equal(new Course('JavaScript', 19.99, 120).withTax(0.2), 23.99);
});

test('both classes share the functions of the mixin', () => {
    assert.equal(Book.prototype.formatPrice, priced.formatPrice);
    assert.equal(Course.prototype.withTax, priced.withTax);
});

test('the instances own only their data', () => {
    assert.deepEqual(Object.keys(new Book('Dune', 'Frank Herbert', 12.5)), [
        'title',
        'author',
        'price'
    ]);
});
