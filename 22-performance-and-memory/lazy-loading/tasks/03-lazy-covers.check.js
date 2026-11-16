import { check, equal, ok, source } from '/lib/browser-check.js';

const { lazyLoad } = await import(source('03-lazy-covers.js'));

const covers = [...document.querySelectorAll('img.cover')];
const [emma, ulysses, hamlet, walden] = covers;

// The observer reports when the browser renders, so we give it a moment.
const settle = () => new Promise((resolve) => setTimeout(resolve, 300));
const loaded = (image) => image.getAttribute('src') === image.dataset.src;

window.scrollTo(0, 0);
const observer = lazyLoad(covers, '0px 0px 200px 0px');
await settle();

await check('lazyLoad() returns the IntersectionObserver', () => {
    ok(observer instanceof IntersectionObserver, 'expected an IntersectionObserver');
});

await check('the cover on the first screen gets its src', () => {
    ok(loaded(emma), 'Emma should have src set to its data-src');
});

await check('the covers far below the screen have no src yet', () => {
    equal(ulysses.getAttribute('src'), null);
    equal(hamlet.getAttribute('src'), null);
    equal(walden.getAttribute('src'), null);
});

await check('a cover gets its src when we scroll near it', async () => {
    hamlet.scrollIntoView();
    await settle();
    ok(loaded(hamlet), 'Hamlet should have src set to its data-src');
    equal(walden.getAttribute('src'), null, 'Walden is still far below');
});

await check('a cover loads once and is not watched any more', async () => {
    // If Emma were still watched, scrolling back to it would copy the new data-src.
    emma.dataset.src = '../examples/covers/dracula.svg';
    window.scrollTo(0, 0);
    await settle();
    ok(emma.getAttribute('src')?.endsWith('emma.svg'), 'Emma should keep its first src');
});

observer?.disconnect();
window.scrollTo(0, document.body.scrollHeight);
