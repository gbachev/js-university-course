export function renderNames(names, list) {
    const items = names.map((name) => {
        const item = document.createElement('li');
        item.textContent = name;
        return item;
    });
    items.forEach((item) => list.append(item));
    return items.length;
}
