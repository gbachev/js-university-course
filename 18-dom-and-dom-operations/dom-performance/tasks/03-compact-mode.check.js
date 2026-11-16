import { check, equal, ok, source } from '/lib/browser-check.js';

const { setCompact } = await import(source('03-compact-mode.js'));
const list = document.querySelector('#books');
const fontSize = () => getComputedStyle(list.firstElementChild).fontSize;

check('compact rows use 14px text', () => {
    setCompact(list, true);
    equal(fontSize(), '14px');
});

check('the list gets the compact class', () => {
    setCompact(list, true);
    ok(list.classList.contains('compact'), 'the list has no compact class');
});

check('the rows keep no inline styles', () => {
    setCompact(list, true);
    for (const row of list.children) {
        equal(row.getAttribute('style'), null, `${row.textContent} has a style attribute`);
    }
});

check('setCompact(list, false) brings back 16px text and removes the class', () => {
    setCompact(list, false);
    equal(fontSize(), '16px');
    ok(!list.classList.contains('compact'), 'the list still has the compact class');
});
