import { check, equal, source } from '/lib/browser-check.js';

const { trackClicks, setUpList } = await import(source('01-mark-read.js'));

const output = document.querySelector('#clicks');
const list = document.querySelector('#books');
const [dune, emma] = list.querySelectorAll('li');
trackClicks(output);
setUpList(list);

check('"Mark read" marks Dune as read', () => {
    dune.querySelector('button').click();
    equal(dune.classList.contains('is-read'), true);
});

check('"Mark read" does not select the book', () => {
    equal(dune.classList.contains('selected'), false);
});

check('the counter counts the click on "Mark read"', () => {
    equal(output.textContent, '1');
});

check('a click on a title selects that book and is counted', () => {
    emma.querySelector('.title').click();
    equal(emma.classList.contains('selected'), true);
    equal(output.textContent, '2');
});

check('a second "Mark read" on Dune makes it unread again and is counted', () => {
    dune.querySelector('button').click();
    equal(dune.classList.contains('is-read'), false);
    equal(emma.classList.contains('selected'), true);
    equal(output.textContent, '3');
});
