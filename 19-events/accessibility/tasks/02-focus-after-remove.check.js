import { check, equal, source } from '/lib/browser-check.js';

const { setUpRemove } = await import(source('02-focus-after-remove.js'));

const list = document.querySelector('#books');
const heading = document.querySelector('#list-heading');
setUpRemove(list, heading);

// Presses the "Remove" button of a book the way a keyboard user does.
function remove(title) {
    const item = [...list.children].find((li) => li.textContent.startsWith(title));
    const button = item.querySelector('button');
    button.focus();
    button.click();
}

function focusedBook() {
    return document.activeElement.closest('li')?.firstChild.textContent.trim();
}

check('removing Emma moves the focus to the button of Neuromancer, the next row', () => {
    remove('Emma');
    equal(list.children.length, 3);
    equal(document.activeElement.nodeName, 'BUTTON');
    equal(focusedBook(), 'Neuromancer');
});

check('removing the last row moves the focus to the previous row', () => {
    remove('Hyperion');
    equal(document.activeElement.nodeName, 'BUTTON');
    equal(focusedBook(), 'Neuromancer');
});

check('a click on the row text removes nothing', () => {
    list.firstElementChild.click();
    equal(list.children.length, 2);
});

check('with no book left the focus is on the heading', () => {
    remove('Dune');
    remove('Neuromancer');
    equal(list.children.length, 0);
    equal(document.activeElement, heading, 'expected the heading to have the focus');
});

check('Tab still skips the heading: its tabIndex is -1', () => {
    equal(heading.tabIndex, -1);
});
