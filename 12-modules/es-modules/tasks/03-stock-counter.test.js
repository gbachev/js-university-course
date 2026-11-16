import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
// The module runs once, so the tests share its stock and run in this order.
const stock = await import(
    process.env.SOLUTIONS ? '../solutions/03-stock-counter.js' : './03-stock-counter.js'
);

test('the stock starts at 3', () => {
    assert.equal(stock.itemsInStock, 3);
});

test('selling one lowers the stock every importer sees', () => {
    assert.equal(stock.sellOne(), true);
    assert.equal(stock.itemsInStock, 2);
});

test('the stock never goes below zero', () => {
    assert.equal(stock.sellOne(), true);
    assert.equal(stock.sellOne(), true);
    assert.equal(stock.itemsInStock, 0);
    assert.equal(stock.sellOne(), false);
    assert.equal(stock.itemsInStock, 0);
});

test('restocking adds to the stock', () => {
    stock.restock(5);
    assert.equal(stock.itemsInStock, 5);
    assert.equal(stock.sellOne(), true);
    assert.equal(stock.itemsInStock, 4);
});

test('other files cannot change the stock directly', () => {
    assert.throws(() => {
        stock.itemsInStock = 10;
    }, TypeError);
    assert.equal(stock.itemsInStock, 4);
});
