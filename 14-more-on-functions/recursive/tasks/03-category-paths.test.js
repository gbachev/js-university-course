import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { categoryPaths } = await import(
    process.env.SOLUTIONS ? '../solutions/03-category-paths.js' : './03-category-paths.js'
);

test('a flat list gives one path per category', () => {
    const categories = [{ name: 'Books' }, { name: 'Music' }];
    assert.deepEqual(categoryPaths(categories), ['Books', 'Music']);
});

test('an empty list gives an empty array', () => {
    assert.deepEqual(categoryPaths([]), []);
});

test('children get the path of their parent in front', () => {
    const categories = [
        { name: 'Books', children: [{ name: 'Fiction', children: [{ name: 'Crime' }] }] },
        { name: 'Music' },
    ];
    assert.deepEqual(categoryPaths(categories), [
        'Books',
        'Books > Fiction',
        'Books > Fiction > Crime',
        'Music',
    ]);
});

test('keeps menu order with several children on several levels', () => {
    const categories = [
        {
            name: 'Books',
            children: [
                { name: 'Fiction', children: [{ name: 'Crime' }, { name: 'Fantasy' }] },
                { name: 'Non-fiction' },
            ],
        },
        { name: 'Music', children: [{ name: 'Vinyl' }] },
    ];
    assert.deepEqual(categoryPaths(categories), [
        'Books',
        'Books > Fiction',
        'Books > Fiction > Crime',
        'Books > Fiction > Fantasy',
        'Books > Non-fiction',
        'Music',
        'Music > Vinyl',
    ]);
});

test('a category with an empty children list is still listed', () => {
    assert.deepEqual(categoryPaths([{ name: 'Gift Cards', children: [] }]), ['Gift Cards']);
});
