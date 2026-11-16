import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { filePaths } = await import(
    process.env.SOLUTIONS ? '../solutions/03-walk-folders.js' : './03-walk-folders.js'
);

const project = {
    name: 'shop',
    files: ['package.json', 'README.md'],
    folders: [
        {
            name: 'src',
            files: ['app.js'],
            folders: [
                { name: 'cart', files: ['cart.js', 'total.js'] },
                { name: 'empty' },
            ],
        },
        { name: 'tests', files: ['cart.test.js'] },
    ],
};

test('yields the files of a single folder', () => {
    assert.deepEqual([...filePaths({ name: 'src', files: ['app.js', 'cart.js'] })], [
        'src/app.js',
        'src/cart.js',
    ]);
});

test('goes into nested folders, files first, then folder by folder', () => {
    assert.deepEqual([...filePaths(project)], [
        'shop/package.json',
        'shop/README.md',
        'shop/src/app.js',
        'shop/src/cart/cart.js',
        'shop/src/cart/total.js',
        'shop/tests/cart.test.js',
    ]);
});

test('a folder without files or folders yields nothing', () => {
    assert.deepEqual([...filePaths({ name: 'empty' })], []);
});

test('handles deep nesting', () => {
    let folder = { name: 'level10', files: ['deep.txt'] };
    for (let level = 9; level >= 1; level--) {
        folder = { name: `level${level}`, folders: [folder] };
    }
    const [path] = filePaths(folder);
    assert.equal(path.split('/').length, 11);
    assert.ok(path.startsWith('level1/level2/'));
    assert.ok(path.endsWith('level10/deep.txt'));
});

test('is lazy: find() stops the walk before the later folders are read', () => {
    let testsRead = 0;
    const tests = {
        name: 'tests',
        get files() {
            testsRead++;
            return ['cart.test.js'];
        },
    };
    const shop = { name: 'shop', files: ['README.md'], folders: [project.folders[0], tests] };
    assert.equal(filePaths(shop).find((path) => path.endsWith('.js')), 'shop/src/app.js');
    assert.equal(testsRead, 0);
});
