// A throttle that keeps the last call: a call that comes too soon replaces the pending one.
function throttle(fn, interval) {
    let last = 0;
    let timerId;
    return (...args) => {
        const wait = last + interval - Date.now();
        clearTimeout(timerId);
        if (wait <= 0) {
            last = Date.now();
            fn(...args);
        } else {
            timerId = setTimeout(() => {
                last = Date.now();
                fn(...args);
            }, wait);
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
// Scrolled to 200
// Scrolled to 450
