import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { Cart } = await import(
    process.env.SOLUTIONS ? '../solutions/01-cart-updated.js' : './01-cart-updated.js'
);

const mug = { id: 'mug', name: 'Mug', price: 12.5 };
const notebook = { id: 'notebook', name: 'Notebook', price: 7.5 };

// Collects the events a cart dispatches, in order.
function listen(cart) {
    const events = [];
    cart.addEventListener('cart:updated', (event) => events.push(event));
    return events;
}

test('adding an item dispatches one cart:updated event', () => {
    const cart = new Cart();
    const events = listen(cart);
    cart.add(mug);
    assert.equal(events.length, 1);
    assert.equal(events[0].type, 'cart:updated');
    assert.ok(events[0] instanceof CustomEvent);
});

test('the detail holds the items and the total', () => {
    const cart = new Cart();
    const events = listen(cart);
    cart.add(mug);
    cart.add(notebook);
    assert.deepEqual(events[1].detail, { items: [mug, notebook], total: 20 });
});

test('removing an item dispatches the new items and total', () => {
    const cart = new Cart();
    cart.add(mug);
    cart.add(notebook);
    const events = listen(cart);
    cart.remove('mug');
    assert.deepEqual(events[0].detail, { items: [notebook], total: 7.5 });
});

test('an empty cart has no items and a total of 0', () => {
    const cart = new Cart();
    cart.add(mug);
    const events = listen(cart);
    cart.remove('mug');
    assert.deepEqual(events[0].detail, { items: [], total: 0 });
});

test('every listener hears the event', () => {
    const cart = new Cart();
    const first = listen(cart);
    const second = listen(cart);
    cart.add(mug);
    assert.equal(first.length, 1);
    assert.equal(second.length, 1);
});
