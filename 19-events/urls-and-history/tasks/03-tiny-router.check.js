import { check, equal, ok, source } from '/lib/browser-check.js';

const { startRouter } = await import(source('03-tiny-router.js'));
const view = document.querySelector('#view');
const [home, books] = document.querySelectorAll('nav a');
const startPath = location.pathname;

// A last listener on window: it notes whether our router stopped the page load, then
// stops it itself, so a missing preventDefault() cannot take us away from the checks.
let prevented = false;
window.addEventListener('click', (event) => {
    prevented = event.defaultPrevented;
    event.preventDefault();
});

function backAndWait() {
    return new Promise((resolve) => {
        const timer = setTimeout(resolve, 1000);
        window.addEventListener('popstate', () => setTimeout(() => {
            clearTimeout(timer);
            resolve();
        }), { once: true });
        history.back();
    });
}

await check('the router starts and shows Home', () => {
    startRouter(view);
    equal(view.textContent, 'Home');
});

await check('a click on Books changes the address without a page load', () => {
    const entries = history.length;
    books.click();
    ok(prevented, 'the click should not load a new page: call event.preventDefault()');
    ok(location.pathname.endsWith('/books'), `the address should end in /books, not ${location.pathname}`);
    equal(view.textContent, 'Books');
    equal(history.length, entries + 1);
});

await check('a second click on Books adds no history entry', () => {
    const entries = history.length;
    books.click();
    equal(history.length, entries);
    equal(view.textContent, 'Books');
});

await check('Back shows Home again', async () => {
    // Without a pushed entry, Back would leave this page, so we only go back after one.
    ok(location.pathname !== startPath, 'nothing to go back to: the Books click pushed no address');
    await backAndWait();
    equal(location.pathname, startPath);
    equal(view.textContent, 'Home');
});

await check('a click on Home, where we are, adds no history entry', () => {
    const entries = history.length;
    home.click();
    equal(history.length, entries);
});
