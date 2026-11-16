import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { Basket } = await import(
    process.env.SOLUTIONS ? '../solutions/03-basket.js' : './03-basket.js'
);

test('a new basket is empty and in euros', () => {
    const basket = new Basket('Jane Doe');
    assert.equal(basket.owner, 'Jane Doe');
    assert.deepEqual(basket.items, []);
    assert.equal(basket.currency, 'EUR');
});

test('add puts an item into the basket and can be chained', () => {
    const basket = new Basket('Jane Doe');
    assert.equal(basket.add('Book', 20).add('Pen', 5), basket);
    assert.deepEqual(basket.items, [
        { title: 'Book', price: 20 },
        { title: 'Pen', price: 5 }
    ]);
});

test('count and total read the items', () => {
    const basket = new Basket('Jane Doe').add('Book', 20).add('Pen', 5);
    assert.equal(basket.count, 2);
    assert.equal(basket.total, 25);
});

test('an empty basket has a total of 0', () => {
    assert.equal(new Basket('Jane Doe').total, 0);
});

test('two baskets never share their items', () => {
    const janes = new Basket('Jane Doe');
    const johns = new Basket('John Doe');
    janes.add('Book', 20);
    assert.deepEqual(johns.items, []);
});

test('a basket owns its fields and its owner, and the fields come first', () => {
    const keys = Object.keys(new Basket('Jane Doe'));
    assert.deepEqual([...keys].sort(), ['currency', 'items', 'owner']);
    assert.equal(keys.at(-1), 'owner');
});
