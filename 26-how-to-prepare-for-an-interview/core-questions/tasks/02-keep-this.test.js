import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { likeHandler } = await import(
    process.env.SOLUTIONS ? '../solutions/02-keep-this.js' : './02-keep-this.js'
);

function createPost(title) {
    return {
        title,
        likes: 0,
        like() {
            this.likes += 1;
            return this.likes;
        },
    };
}

test('the handler works when called as a plain function', () => {
    const post = createPost('Closures in 5 minutes');
    const handler = likeHandler(post);
    assert.equal(handler(), 1);
    assert.equal(handler(), 2);
    assert.equal(post.likes, 2);
});

test('the handler works when another function calls it later', () => {
    const post = createPost('The event loop');
    const button = { onClick: likeHandler(post) };
    button.onClick();
    assert.equal(post.likes, 1);
});

test('the handlers of two posts do not mix', () => {
    const first = createPost('Hoisting');
    const second = createPost('Prototypes');
    likeHandler(first)();
    likeHandler(second)();
    likeHandler(second)();
    assert.equal(first.likes, 1);
    assert.equal(second.likes, 2);
});

test('the handler likes its own post even when called with another this', () => {
    const post = createPost('this in 3 rules');
    const other = { likes: 100 };
    likeHandler(post).call(other);
    assert.equal(post.likes, 1);
    assert.equal(other.likes, 100);
});
