export function limitUses(fn, max) {
    let uses = 0;
    return function (...args) {
        if (uses >= max) {
            return null;
        }
        uses++;
        return fn(...args);
    };
}
