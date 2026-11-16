import { check, equal, ok, source } from '/lib/browser-check.js';

const { watchUnread } = await import(source('01-count-the-unread.js'));
const inbox = document.querySelector('#inbox');
const counter = document.querySelector('#unread');

// The observer callback is a microtask: after one await, it has run.
const afterObserver = () => Promise.resolve();

function notification(text, status) {
    const item = document.createElement('li');
    item.textContent = text;
    item.dataset.status = status;
    return item;
}

let observer;

await check('watchUnread runs without an error', () => {
    observer = watchUnread(inbox, counter);
});

await check('the counter starts with the 2 new notifications', () => {
    equal(counter.textContent, '2');
});

await check('a new notification from the widget counts', async () => {
    inbox.append(notification('John Doe sent you a message', 'new'));
    await afterObserver();
    equal(counter.textContent, '3');
});

await check('a notification marked as seen stops counting', async () => {
    inbox.firstElementChild.dataset.status = 'seen';
    await afterObserver();
    equal(counter.textContent, '2');
});

await check('a removed notification stops counting', async () => {
    inbox.lastElementChild.remove();
    await afterObserver();
    equal(counter.textContent, '1');
});

await check('watchUnread returns the observer, and disconnect() stops it', async () => {
    ok(observer instanceof MutationObserver, 'watchUnread should return the observer');
    observer.disconnect();
    inbox.append(notification('Sale ends today', 'new'));
    await afterObserver();
    equal(counter.textContent, '1');
});
