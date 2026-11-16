import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { addIgnoreLines } = await import(
    process.env.SOLUTIONS ? '../solutions/03-gitignore-lines.js' : './03-gitignore-lines.js'
);

test('a new entry goes at the end', () => {
    assert.equal(
        addIgnoreLines('node_modules\ndist\n', ['coverage']),
        'node_modules\ndist\ncoverage\n',
    );
});

test('an entry that is already there is not added again', () => {
    assert.equal(
        addIgnoreLines('node_modules\ncoverage\ndist\n', ['coverage']),
        'node_modules\ncoverage\ndist\n',
    );
});

test('running it twice gives the same text as running it once', () => {
    const once = addIgnoreLines('node_modules\n', ['coverage', '.env']);
    assert.equal(addIgnoreLines(once, ['coverage', '.env']), once);
    assert.equal(once, 'node_modules\ncoverage\n.env\n');
});

test('an entry listed twice is added once', () => {
    assert.equal(addIgnoreLines('dist\n', ['coverage', 'coverage']), 'dist\ncoverage\n');
});

test('a file without a newline at the end still gets each entry on its own line', () => {
    assert.equal(addIgnoreLines('node_modules', ['coverage']), 'node_modules\ncoverage\n');
});

test('blank lines and comments in the file stay as they are', () => {
    assert.equal(
        addIgnoreLines('# Logs\nlogs\n\nnode_modules\n', ['coverage']),
        '# Logs\nlogs\n\nnode_modules\ncoverage\n',
    );
});

test('an empty file gets the entries without a blank first line', () => {
    assert.equal(addIgnoreLines('', ['node_modules', 'dist']), 'node_modules\ndist\n');
});
