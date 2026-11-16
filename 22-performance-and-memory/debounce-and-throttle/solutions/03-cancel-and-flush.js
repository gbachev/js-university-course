export function debounce(fn, delay) {
    let timerId;
    let pendingArgs = null; // the arguments of the run that is waiting, if any

    const run = () => {
        const args = pendingArgs;
        pendingArgs = null;
        fn(...args);
    };

    const debounced = (...args) => {
        clearTimeout(timerId);
        pendingArgs = args;
        timerId = setTimeout(run, delay);
    };

    debounced.cancel = () => {
        clearTimeout(timerId);
        pendingArgs = null;
    };

    debounced.flush = () => {
        if (pendingArgs !== null) {
            clearTimeout(timerId);
            run();
        }
    };

    return debounced;
}
