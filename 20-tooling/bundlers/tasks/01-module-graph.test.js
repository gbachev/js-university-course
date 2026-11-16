import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { collectModules } = await import(
    process.env.SOLUTIONS ? '../solutions/01-module-graph.js' : './01-module-graph.js'
);

test('the entry and the files it imports, in order', () => {
    const imports = { 'main.js': ['cart.js', 'format.js'], 'cart.js': [], 'format.js': [] };
    assert.deepEqual(
        collectModules(imports, 'main.js'),
        ['main.js', 'cart.js', 'format.js'],
    );
});

test('the imports of an import come before the next import', () => {
    const imports = {
        'main.js': ['cart.js', 'format.js'],
        'cart.js': ['prices.js'],
        'prices.js': [],
        'format.js': [],
    };
    assert.deepEqual(collectModules(imports, 'main.js'), [
        'main.js',
        'cart.js',
        'prices.js',
        'format.js',
    ]);
});

test('a package is in the result, without imports of its own', () => {
    const imports = { 'main.js': ['date-fns', 'cart.js'], 'cart.js': [] };
    assert.deepEqual(
        collectModules(imports, 'main.js'),
        ['main.js', 'date-fns', 'cart.js'],
    );
});

test('a file two others import appears once', () => {
    const imports = {
        'main.js': ['cart.js', 'format.js'],
        'cart.js': ['format.js'],
        'format.js': [],
    };
    assert.deepEqual(
        collectModules(imports, 'main.js'),
        ['main.js', 'cart.js', 'format.js'],
    );
});

test('files that import each other do not loop forever', () => {
    const imports = { 'main.js': ['a.js'], 'a.js': ['b.js'], 'b.js': ['a.js', 'main.js'] };
    assert.deepEqual(collectModules(imports, 'main.js'), ['main.js', 'a.js', 'b.js']);
});

test('a file nobody imports is left out', () => {
    const imports = { 'main.js': ['cart.js'], 'cart.js': [], 'old.js': [] };
    assert.deepEqual(collectModules(imports, 'main.js'), ['main.js', 'cart.js']);
});
