export function addBooks(list, titles) {
    const fragment = document.createDocumentFragment();
    for (const title of titles) {
        const row = document.createElement('li');
        row.textContent = title;
        fragment.append(row);
    }
    // One insert: the children of the fragment move into the list together.
    list.append(fragment);
}
