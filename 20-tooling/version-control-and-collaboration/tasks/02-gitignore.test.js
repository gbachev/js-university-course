import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { isIgnored } = await import(
    process.env.SOLUTIONS ? '../solutions/02-gitignore.js' : './02-gitignore.js'
);

const gitignore = [
    '# Generated',
    'node_modules/',
    'dist/',
    'coverage/',
    '',
    '.env',
    '.DS_Store',
];

test('files inside an ignored folder are ignored', () => {
    assert.equal(isIgnored('node_modules/vite/package.json', gitignore), true);
    assert.equal(isIgnored('dist/assets/index.js', gitignore), true);
});

test('our own files are not ignored', () => {
    assert.equal(isIgnored('src/books.js', gitignore), false);
    assert.equal(isIgnored('package.json', gitignore), false);
    assert.equal(isIgnored('package-lock.json', gitignore), false);
});

test('a folder pattern matches a folder deeper in the path', () => {
    assert.equal(isIgnored('packages/app/node_modules/vite/index.js', gitignore), true);
});

test('a folder pattern does not match a file of the same name', () => {
    assert.equal(isIgnored('docs/dist', ['dist/']), false);
});

test('a name matches a file anywhere', () => {
    assert.equal(isIgnored('.env', gitignore), true);
    assert.equal(isIgnored('src/.DS_Store', gitignore), true);
    assert.equal(isIgnored('.env.example', gitignore), false);
});

test('a name without a slash also matches a folder', () => {
    assert.equal(isIgnored('logs/old/app.js', ['logs']), true);
});

test('a star pattern matches the end of a name', () => {
    assert.equal(isIgnored('npm-debug.log', ['*.log']), true);
    assert.equal(isIgnored('logs/vite.log', ['*.log']), true);
    assert.equal(isIgnored('src/log.js', ['*.log']), false);
});

test('comments and empty lines match nothing', () => {
    assert.equal(isIgnored('# Generated', ['# Generated', '']), false);
});
