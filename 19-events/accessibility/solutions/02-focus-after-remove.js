export function setUpRemove(list, heading) {
    // -1: focus() works, Tab still skips the heading.
    heading.tabIndex = -1;
    list.addEventListener('click', (event) => {
        const button = event.target.closest('button');
        if (!button) {
            return;
        }
        const item = button.closest('li');
        const next = item.nextElementSibling ?? item.previousElementSibling;
        item.remove();
        const target = next?.querySelector('button') ?? heading;
        target.focus();
    });
}
