export function flatten(list, depth = Infinity) {
    const result = [];
    for (const item of list) {
        if (Array.isArray(item) && depth > 0) {
            result.push(...flatten(item, depth - 1));
        } else {
            result.push(item);
        }
    }
    return result;
}
