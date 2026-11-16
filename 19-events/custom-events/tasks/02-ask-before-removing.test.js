import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { Cart } = await import(
    process.env.SOLUTIONS ? '../solutions/02-ask-before-removing.js' : './02-ask-before-removing.js'
);

const mug = { id: 'mug', name: 'Mug', price: 12.5 };
const giftCard = { id: 'gift-card', name: 'Gift card', price: 25 };

// Records the type of every event the cart dispatches, and lets us veto gift cards.
function watch(cart, { vetoGiftCards = false } = {}) {
    const types = [];
    cart.addEventListener('cart:remove', (event) => {
        types.push(event.type);
        if (vetoGiftCards && event.detail.item.id === 'gift-card') {
            event.preventDefault();
        }
    });
    cart.addEventListener('cart:updated', (event) => types.push(event.type));
    return types;
}

test('removing asks first, then reports the change', () => {
    const cart = new Cart([mug, giftCard]);
    const types = watch(cart);
    assert.equal(cart.remove('mug'), true);
    assert.deepEqual(cart.items, [giftCard]);
    assert.deepEqual(types, ['cart:remove', 'cart:updated']);
});

test('the cart:remove event carries the item', () => {
    const cart = new Cart([mug]);
    let detail = null;
    cart.addEventListener('cart:remove', (event) => {
        detail = event.detail;
    });
    cart.remove('mug');
    assert.deepEqual(detail, { item: mug });
});

test('a listener can keep an item in the cart', () => {
    const cart = new Cart([mug, giftCard]);
    const types = watch(cart, { vetoGiftCards: true });
    assert.equal(cart.remove('gift-card'), false);
    assert.deepEqual(cart.items, [mug, giftCard]);
    assert.deepEqual(types, ['cart:remove']);
});

test('the veto is only for the items the listener cancels', () => {
    const cart = new Cart([mug, giftCard]);
    watch(cart, { vetoGiftCards: true });
    assert.equal(cart.remove('mug'), true);
    assert.deepEqual(cart.items, [giftCard]);
});

test('an id that is not in the cart returns false and dispatches nothing', () => {
    const cart = new Cart([mug]);
    const types = watch(cart);
    assert.equal(cart.remove('poster'), false);
    assert.deepEqual(cart.items, [mug]);
    assert.deepEqual(types, []);
});
