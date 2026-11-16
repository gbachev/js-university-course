export function repeatOrder(order) {
    // Spread copies only the top level; structuredClone copies the nested objects too.
    return structuredClone(order);
}
