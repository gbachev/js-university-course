import { check, equal, source } from '/lib/browser-check.js';

// Count the timers the page starts and stops, so the checks can see a leak.
const running = new Set();
const { setInterval: start, clearInterval: stop } = window;
window.setInterval = (callback, delay) => {
    const id = start(callback, delay);
    running.add(id);
    return id;
};
window.clearInterval = (id) => {
    running.delete(id);
    stop(id);
};

await import(source('02-clean-up-on-remove.js'));
const spot = document.querySelector('#spot');
const counter = document.createElement('seconds-counter');

check('inserting the counter starts one timer', () => {
    spot.append(counter);
    equal(running.size, 1);
    equal(counter.textContent, '0 s');
});

check('removing the counter stops its timer', () => {
    counter.remove();
    equal(running.size, 0);
});

check('inserting it again starts one new timer, from 0', () => {
    spot.append(counter);
    equal(running.size, 1);
    equal(counter.textContent, '0 s');
    counter.remove();
    equal(running.size, 0);
});
