export function countByKind(values) {
    let objects = 0;
    let primitives = 0;

    for (const value of values) {
        // typeof null is 'object' and typeof a function is 'function', so we check both.
        if ((typeof value === 'object' && value !== null) || typeof value === 'function') {
            objects++;
        } else {
            primitives++;
        }
    }

    return { objects, primitives };
}
