export function countCalls(fn) {
    function counted(...args) {
        counted.calls++;
        return fn(...args);
    }
    counted.calls = 0;
    return counted;
}
