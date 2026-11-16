export function showCount(list) {
    let count = 0;
    for (const node of list.childNodes) {
        if (node.nodeName === 'LI') {
            count++;
        }
    }
    document.title = `To Read (${count})`;
    return document.title;
}
