export function throttle(fn, interval) {
    let last = 0;
    let timerId;
    return (...args) => {
        const wait = last + interval - Date.now();
        clearTimeout(timerId);
        if (wait <= 0) {
            last = Date.now();
            fn(...args);
            return true;
        }
        timerId = setTimeout(() => {
            last = Date.now();
            fn(...args);
        }, wait);
        return false;
    };
}
