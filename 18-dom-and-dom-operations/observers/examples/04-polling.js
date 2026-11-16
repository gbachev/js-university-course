// Polling works, but it runs ten times a second while nobody scrolls.
const last = document.querySelector('#inbox li:last-child');

const timerId = setInterval(() => {
    const box = last.getBoundingClientRect();
    if (box.top < window.innerHeight && box.bottom > 0) {
        console.log('Last notification seen');
        clearInterval(timerId);
    }
}, 100);
// Last notification seen (once we scroll down)
