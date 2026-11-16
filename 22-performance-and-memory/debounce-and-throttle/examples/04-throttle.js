// The smallest throttle: it runs at most once every `interval` ms and drops the rest.
function throttle(fn, interval) {
    let last = 0;
    return (...args) => {
        const now = Date.now();
        if (now - last >= interval) {
            last = now;
            fn(...args);
        }
    };
}

const logScroll = throttle((y) => {
    console.log(`Scrolled to ${y}`);
}, 300);

for (const y of [0, 100, 200, 400, 450]) {
    setTimeout(() => logScroll(y), y);
}
// Scrolled to 0
// Scrolled to 400
