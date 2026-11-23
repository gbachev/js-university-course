export function handleBookActions(list, onAction) {
    function onClick(event) {
        const button = event.target.closest('button[data-action]');
        if (!button || !list.contains(button)) {
            return;
        }
        onAction(button.dataset.action, button.closest('li').dataset.id);
    }

    list.addEventListener('click', onClick);
    return () => list.removeEventListener('click', onClick);
}
