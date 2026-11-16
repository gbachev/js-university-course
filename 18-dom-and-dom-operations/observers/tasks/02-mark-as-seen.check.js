import { check, equal, ok, source } from '/lib/browser-check.js';

const { markWhenSeen } = await import(source('02-mark-as-seen.js'));
const [first, second, last] = document.querySelectorAll('#inbox li');

// The browser checks intersections when it renders, so we wait a few frames.
const nextFrame = () => new Promise((resolve) => requestAnimationFrame(resolve));
async function frames() {
    for (let i = 0; i < 4; i++) {
        await nextFrame();
    }
}

// Scroll so that only the top `pixels` of an item show at the bottom of the screen.
function showTopOf(item, pixels) {
    const pageTop = item.getBoundingClientRect().top + window.scrollY;
    window.scrollTo(0, pageTop - window.innerHeight + pixels);
}

window.scrollTo(0, 0);
await frames();
let observer;
await check('markWhenSeen runs without an error', () => {
    observer = markWhenSeen(document.querySelectorAll('#inbox li'));
});
await frames();

await check('markWhenSeen returns an IntersectionObserver', () => {
    ok(observer instanceof IntersectionObserver, 'markWhenSeen should return the observer');
});

await check('the notification on the screen is seen', () => {
    equal(first.dataset.status, 'seen');
});

await check('the notifications below the screen are still new', () => {
    equal(second.dataset.status, 'new');
    equal(last.dataset.status, 'new');
});

await check('a quarter of a notification is not enough', async () => {
    showTopOf(second, 50);
    await frames();
    equal(second.dataset.status, 'new');
});

await check('a notification turns seen once half of it shows', async () => {
    showTopOf(second, 150);
    await frames();
    equal(second.dataset.status, 'seen');
});

await check('a seen notification is no longer watched', async () => {
    second.dataset.status = 'new';
    window.scrollTo(0, 0);
    await frames();
    showTopOf(second, 150);
    await frames();
    equal(second.dataset.status, 'new');
    second.dataset.status = 'seen';
});

await check('the last notification turns seen when we scroll to it', async () => {
    last.scrollIntoView();
    await frames();
    equal(last.dataset.status, 'seen');
    window.scrollTo(0, document.body.scrollHeight);
});
