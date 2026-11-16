import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { postMethods, createPost } = await import(
    process.env.SOLUTIONS ? '../solutions/02-shared-tags.js' : './02-shared-tags.js'
);

test('a tag lands on its own post', () => {
    const post = createPost('Hello');
    post.tag('news').tag('js');
    assert.deepEqual(post.tags, ['news', 'js']);
    assert.equal(post.hasTag('js'), true);
});

test('a tag on one post does not show up on another', () => {
    const first = createPost('Hello');
    const second = createPost('Classes');
    first.tag('news');
    assert.deepEqual(second.tags, []);
    assert.equal(second.hasTag('news'), false);
});

test('every post owns its title and tags', () => {
    assert.deepEqual(Object.keys(createPost('Hello')), ['title', 'tags']);
});

test('the methods stay shared on postMethods', () => {
    const post = createPost('Hello');
    assert.equal(Object.getPrototypeOf(post), postMethods);
    assert.equal(Object.hasOwn(post, 'tag'), false);
    assert.equal(Object.hasOwn(postMethods, 'tags'), false);
});
