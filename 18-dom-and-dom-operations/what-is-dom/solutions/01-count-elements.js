export function countElements(parent) {
    let count = 0;
    for (const node of parent.childNodes) {
        if (node.nodeType === Node.ELEMENT_NODE) {
            count++;
        }
    }
    return count;
}
