import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { wishlistMethods, createWishlist } = await import(
    process.env.SOLUTIONS
        ? '../solutions/01-wishlist-factory.js'
        : './01-wishlist-factory.js'
);

test('a new wishlist belongs to its owner and is empty', () => {
    const wishlist = createWishlist('Jane Doe');
    assert.equal(wishlist.owner, 'Jane Doe');
    assert.deepEqual(wishlist.titles, []);
    assert.equal(wishlist.count(), 0);
});

test('the shared methods work on the wishlist', () => {
    const wishlist = createWishlist('Jane Doe');
    wishlist.add('Dune').add('Emma');
    assert.equal(wishlist.count(), 2);
    assert.equal(wishlist.has('Dune'), true);
    assert.equal(wishlist.has('Ulysses'), false);
});

test('the wishlist links to wishlistMethods', () => {
    assert.equal(Object.getPrototypeOf(createWishlist('Jane Doe')), wishlistMethods);
});

test('a wishlist owns only its data', () => {
    assert.deepEqual(Object.keys(createWishlist('Jane Doe')).sort(), ['owner', 'titles']);
});

test('two wishlists do not share their titles', () => {
    const janes = createWishlist('Jane Doe');
    const johns = createWishlist('John Doe');
    janes.add('Dune');
    assert.deepEqual(johns.titles, []);
    assert.equal(janes.add, johns.add);
});
