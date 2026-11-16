import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { Book, Ebook } = await import(
    process.env.SOLUTIONS ? '../solutions/03-ebook-is-a-book.js' : './03-ebook-is-a-book.js'
);

function createEbook() {
    return new Ebook('Dune', 'Frank Herbert', 412, 2.5);
}

test('an ebook owns the book fields and its size', () => {
    const keys = Object.keys(createEbook()).sort();
    assert.deepEqual(keys, ['author', 'pages', 'sizeInMb', 'title']);
});

test('an ebook describes itself with the method of Book', () => {
    assert.equal(createEbook().describe(), 'Dune by Frank Herbert, 412 pages');
});

test('an ebook can be downloaded', () => {
    assert.equal(createEbook().download(), 'Downloading Dune (2.5 MB)');
});

test('an ebook is an Ebook and a Book', () => {
    const dune = createEbook();
    assert.equal(dune instanceof Ebook, true);
    assert.equal(dune instanceof Book, true);
});

test('the constructor property points to Ebook', () => {
    assert.equal(createEbook().constructor, Ebook);
});

test('an ordinary book does not get download', () => {
    const emma = new Book('Emma', 'Jane Austen', 474);
    assert.equal(emma.download, undefined);
});
