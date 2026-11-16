import { check, equal, ok, source } from '/lib/browser-check.js';

const { makeKeyboardButton } = await import(source('01-keyboard-button.js'));

const list = document.querySelector('#books');
const clear = document.querySelector('#clear');
let clicks = 0;
clear.addEventListener('click', () => {
    clicks += 1;
    list.replaceChildren();
});
makeKeyboardButton(clear);

// key and code as a real keyboard sends them, so event.key and event.code both work.
const codes = { Enter: 'Enter', ' ': 'Space', a: 'KeyA', Escape: 'Escape' };

function press(key) {
    const init = { key, code: codes[key], bubbles: true, cancelable: true };
    const event = new KeyboardEvent('keydown', init);
    clear.dispatchEvent(event);
    return event;
}

check('the div has the button role', () => {
    equal(clear.getAttribute('role'), 'button');
});

check('Tab reaches it: its tabIndex is 0', () => {
    equal(clear.tabIndex, 0);
});

check('Enter presses it and the list is cleared', () => {
    press('Enter');
    equal(clicks, 1);
    equal(list.children.length, 0);
});

check('Space presses it too', () => {
    press(' ');
    equal(clicks, 2);
});

check('Space does not scroll the page: its default is prevented', () => {
    ok(press(' ').defaultPrevented, 'expected preventDefault() on the Space keydown');
});

check('other keys do not press it', () => {
    const before = clicks;
    press('a');
    press('Escape');
    equal(clicks, before);
});
