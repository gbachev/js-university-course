const list = document.querySelector('#books');

list.addEventListener('click', (event) => {
    const button = event.target.closest('button[data-action]');
    if (!button || !list.contains(button)) {
        return;
    }
    const item = button.closest('li');
    console.log(button.dataset.action, item.dataset.id);
});
// clicking Remove on the item with data-id="42":
// remove 42
