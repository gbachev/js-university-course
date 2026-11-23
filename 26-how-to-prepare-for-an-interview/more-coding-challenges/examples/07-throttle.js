function throttle(fn, wait) {
    let last = 0;
    return function (...args) {
        const now = Date.now();
        if (now - last >= wait) {
            last = now;
            fn.apply(this, args);
        }
    };
}

const report = throttle((y) => console.log(`Scrolled to ${y}`), 300);

report(0);
setTimeout(() => report(120), 100);
setTimeout(() => report(240), 200);
setTimeout(() => report(480), 400);
// Scrolled to 0
// Scrolled to 480
