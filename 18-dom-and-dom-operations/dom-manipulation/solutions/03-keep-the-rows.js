export function addBooks(list, titles) {
    for (const title of titles) {
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';

        const label = document.createElement('label');
        label.append(checkbox, ` ${title}`);

        const row = document.createElement('li');
        row.append(label);
        list.append(row);
    }
}
