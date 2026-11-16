import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { treeShake } = await import(
    process.env.SOLUTIONS ? '../solutions/02-tree-shaking.js' : './02-tree-shaking.js'
);

test('an export nobody imports is dropped', () => {
    const exportsByFile = { 'format.js': ['formatPrice', 'formatWeight'] };
    const imports = [{ from: 'format.js', names: ['formatPrice'] }];
    assert.deepEqual(treeShake(exportsByFile, imports), { 'format.js': ['formatPrice'] });
});

test('imports from several files and statements add up', () => {
    const exportsByFile = {
        'cart.js': ['cartTotal', 'cartCount'],
        'format.js': ['formatPrice', 'formatWeight'],
    };
    const imports = [
        { from: 'cart.js', names: ['cartTotal'] },
        { from: 'format.js', names: ['formatPrice'] },
        { from: 'format.js', names: ['formatWeight'] },
    ];
    assert.deepEqual(treeShake(exportsByFile, imports), {
        'cart.js': ['cartTotal'],
        'format.js': ['formatPrice', 'formatWeight'],
    });
});

test('the exports keep their order', () => {
    const exportsByFile = { 'format.js': ['formatPrice', 'formatWeight', 'formatDate'] };
    const imports = [{ from: 'format.js', names: ['formatDate', 'formatPrice'] }];
    assert.deepEqual(treeShake(exportsByFile, imports), {
        'format.js': ['formatPrice', 'formatDate'],
    });
});

test('a file nobody imports keeps an empty list', () => {
    const exportsByFile = { 'cart.js': ['cartTotal'], 'old.js': ['oldTotal'] };
    const imports = [{ from: 'cart.js', names: ['cartTotal'] }];
    assert.deepEqual(
        treeShake(exportsByFile, imports),
        { 'cart.js': ['cartTotal'], 'old.js': [] },
    );
});

test('the same name in another file does not count', () => {
    const exportsByFile = { 'cart.js': ['total'], 'order.js': ['total'] };
    const imports = [{ from: 'order.js', names: ['total'] }];
    assert.deepEqual(
        treeShake(exportsByFile, imports),
        { 'cart.js': [], 'order.js': ['total'] },
    );
});

test('the given object is not changed', () => {
    const exportsByFile = { 'format.js': ['formatPrice', 'formatWeight'] };
    treeShake(exportsByFile, [{ from: 'format.js', names: ['formatPrice'] }]);
    assert.deepEqual(exportsByFile, { 'format.js': ['formatPrice', 'formatWeight'] });
});
