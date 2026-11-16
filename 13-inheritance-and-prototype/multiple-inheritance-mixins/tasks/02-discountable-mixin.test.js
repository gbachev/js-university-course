import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { Discountable, Product, Course } = await import(
    process.env.SOLUTIONS
        ? '../solutions/02-discountable-mixin.js'
        : './02-discountable-mixin.js'
);

test('without a discount the final price is the price', () => {
    assert.equal(new Course('JavaScript', 50, 120).finalPrice, 50);
});

test('a discount lowers the final price', () => {
    const course = new Course('JavaScript', 50, 120);
    course.setDiscount(20);
    assert.equal(course.finalPrice, 40);
});

test('a discount outside 0 to 100 throws a RangeError', () => {
    const course = new Course('JavaScript', 50, 120);
    assert.throws(() => course.setDiscount(120), {
        name: 'RangeError',
        message: 'Invalid discount'
    });
    assert.throws(() => course.setDiscount(-5), RangeError);
    assert.equal(course.finalPrice, 50);
});

test('the discount stays private', () => {
    const course = new Course('JavaScript', 50, 120);
    course.setDiscount(20);
    assert.deepEqual(Object.keys(course), ['title', 'price', 'lessons']);
});

test('the course is still a Product', () => {
    assert.equal(new Course('JavaScript', 50, 120) instanceof Product, true);
});

test('the mixin works with any other class too', () => {
    class Lamp {
        price = 30;
    }
    const lamp = new (Discountable(Lamp))();
    lamp.setDiscount(50);
    assert.equal(lamp.finalPrice, 15);
});
