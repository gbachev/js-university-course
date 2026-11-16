export function bookTitles(list) {
    const titles = [];
    for (const node of list.childNodes) {
        if (node.nodeType === Node.ELEMENT_NODE) {
            // The title is the text node inside the li.
            titles.push(node.firstChild.nodeValue);
        }
    }
    return titles;
}
