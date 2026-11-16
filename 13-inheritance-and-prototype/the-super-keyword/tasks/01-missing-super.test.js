import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { Product, DigitalProduct } = await import(
    process.env.SOLUTIONS ? '../solutions/01-missing-super.js' : './01-missing-super.js'
);

test('a digital product can be created', () => {
    assert.doesNotThrow(() => new DigitalProduct('JS course', 49, 120));
});

test('a digital product owns its title, price and file size', () => {
    const course = new DigitalProduct('JS course', 49, 120);
    assert.deepEqual(Object.keys(course), ['title', 'price', 'fileSizeInMb']);
    assert.equal(course.fileSizeInMb, 120);
});

test('describe comes from Product', () => {
    assert.equal(new DigitalProduct('JS course', 49, 120).describe(), 'JS course - 49 EUR');
});

test('a digital product is a DigitalProduct and a Product', () => {
    const course = new DigitalProduct('JS course', 49, 120);
    assert.equal(course instanceof DigitalProduct, true);
    assert.equal(course instanceof Product, true);
});
