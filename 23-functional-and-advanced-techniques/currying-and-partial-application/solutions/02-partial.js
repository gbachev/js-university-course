export function formatLog(prefix, message) {
    return `${prefix} ${message}`;
}

export function partial(fn, ...fixed) {
    return (...rest) => fn(...fixed, ...rest);
}

export const logOrder = partial(formatLog, '[order]');
