import { check, equal, source } from '/lib/browser-check.js';

const { setUpReadMore } = await import(source('01-read-more.js'));

const link = document.querySelector('#read-more');
const description = document.querySelector('#description');
setUpReadMore(link, description);

// Our own listener on document sees the click after the link's listener ran.
let lastClick = null;
document.addEventListener('click', (event) => {
    lastClick = event;
});

check('the first click shows the description and says "Read less"', () => {
    link.click();
    equal(description.hidden, false);
    equal(link.textContent, 'Read less');
});

check('the click does not follow the link', () => {
    equal(lastClick.defaultPrevented, true, 'the link still jumps to #description');
});

check('the second click hides the description and says "Read more"', () => {
    link.click();
    equal(description.hidden, true);
    equal(link.textContent, 'Read more');
    equal(lastClick.defaultPrevented, true, 'the link still jumps to #description');
});
