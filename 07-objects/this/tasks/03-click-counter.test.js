import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { createCounter, getClickHandler } = await import(
    process.env.SOLUTIONS ? '../solutions/03-click-counter.js' : './03-click-counter.js'
);

test('the handler returns the new count', () => {
    const handler = getClickHandler(createCounter());
    assert.equal(handler(), 1);
    assert.equal(handler(), 2);
});

test('the clicks are counted on the counter', () => {
    const counter = createCounter();
    const handler = getClickHandler(counter);
    handler();
    handler();
    handler();
    assert.equal(counter.clicks, 3);
});

test('two buttons with two counters count separately', () => {
    const likes = createCounter();
    const shares = createCounter();
    getClickHandler(likes)();
    getClickHandler(likes)();
    getClickHandler(shares)();
    assert.equal(likes.clicks, 2);
    assert.equal(shares.clicks, 1);
});

test('the handler keeps working when it is stored on another object', () => {
    const counter = createCounter();
    const button = { onClick: getClickHandler(counter) };
    button.onClick();
    assert.equal(counter.clicks, 1);
});
