import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { commandsFor } = await import(
    process.env.SOLUTIONS ? '../solutions/03-lint-staged.js' : './03-lint-staged.js'
);

const config = {
    '*.js': ['eslint --fix', 'prettier --write'],
    '*.{json,md,css,html}': 'prettier --write',
};

test('a staged .js file gets both commands, in order', () => {
    assert.deepEqual(commandsFor(['src/stats.js'], config), [
        { command: 'eslint --fix', files: ['src/stats.js'] },
        { command: 'prettier --write', files: ['src/stats.js'] },
    ]);
});

test('a single command works like a list of one', () => {
    assert.deepEqual(commandsFor(['package.json', 'src/style.css'], config), [
        { command: 'prettier --write', files: ['package.json', 'src/style.css'] },
    ]);
});

test('each pattern gets only its own files, in the order of the config', () => {
    assert.deepEqual(commandsFor(['README.md', 'src/stats.js', 'src/books.js'], config), [
        { command: 'eslint --fix', files: ['src/stats.js', 'src/books.js'] },
        { command: 'prettier --write', files: ['src/stats.js', 'src/books.js'] },
        { command: 'prettier --write', files: ['README.md'] },
    ]);
});

test('files no pattern matches run nothing', () => {
    assert.deepEqual(commandsFor(['public/favicon.svg', '.nvmrc'], config), []);
    assert.deepEqual(commandsFor([], config), []);
});

test('the extension has to match fully', () => {
    assert.deepEqual(commandsFor(['src/main.jsx', 'notes.mdx'], config), []);
});
