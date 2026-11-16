import { check, equal, ok, source } from '/lib/browser-check.js';

const { toggleRead } = await import(source('02-mark-as-read.js'));
const [dune, emma] = document.querySelectorAll('#books li');

check('a book to read becomes read', () => {
    equal(toggleRead(dune), true);
    ok(dune.classList.contains('read'), 'Dune should have the read class');
    equal(dune.querySelector('.status').textContent, 'Read');
});

check('a read book goes back to To read', () => {
    equal(toggleRead(emma), false);
    ok(!emma.classList.contains('read'), 'Emma should lose the read class');
    equal(emma.querySelector('.status').textContent, 'To read');
});

check('the other classes stay', () => {
    ok(dune.classList.contains('book'), 'Dune should keep the book class');
    ok(emma.classList.contains('book'), 'Emma should keep the book class');
});

check('the title stays next to the status', () => {
    equal(dune.firstChild.nodeValue, 'Dune ');
});
