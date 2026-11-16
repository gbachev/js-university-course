export function setUpTrail(list, trail) {
    const book = list.querySelector('li');
    const button = book.querySelector('button');

    function log(event) {
        const line = document.createElement('li');
        line.textContent = `${event.currentTarget.nodeName} ${event.eventPhase}`;
        trail.append(line);
    }

    list.addEventListener('click', log, { capture: true });
    book.addEventListener('click', log);
    button.addEventListener('click', log);

    return function stop() {
        // The capture flag must match, or the list keeps its listener.
        list.removeEventListener('click', log, { capture: true });
        book.removeEventListener('click', log);
        button.removeEventListener('click', log);
    };
}
