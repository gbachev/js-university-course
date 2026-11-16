// Wait until the calls stop for `delay` ms, then run `fn` once
// with the arguments of the last call.
export function debounce(fn, delay) {
    let timerId;
    return (...args) => {
        clearTimeout(timerId);
        timerId = setTimeout(() => fn(...args), delay);
    };
}
