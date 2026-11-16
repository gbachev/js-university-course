export function setUpAdd(form, list, status) {
    // The live region must exist before we change its text.
    status.setAttribute('aria-live', 'polite');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const input = form.elements.title;
        const title = input.value.trim();
        if (title === '') {
            status.textContent = 'Type a title first.';
            input.focus();
            return;
        }
        const item = document.createElement('li');
        const button = document.createElement('button');
        button.textContent = 'Remove';
        button.setAttribute('aria-label', `Remove ${title}`);
        item.append(`${title} `, button);
        list.append(item);
        status.textContent = `${title} added, ${list.children.length} books`;
        form.reset();
    });
}
