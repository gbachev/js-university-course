import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { splitBill } = await import(
    process.env.SOLUTIONS ? '../solutions/03-split-the-bill.js' : './03-split-the-bill.js'
);

test('the tip is added before the bill is split', () => {
    assert.equal(splitBill(100, 20, 4), 30);
});

test('a 25 percent tip on 80 shared by four people', () => {
    assert.equal(splitBill(80, 25, 4), 25);
});

test('with no tip we only divide the bill', () => {
    assert.equal(splitBill(60, 0, 2), 30);
});

test('one person pays the whole bill and the tip', () => {
    assert.equal(splitBill(40, 50, 1), 60);
});
