// Task 2: The click trail
// Lecture: Bubbling and Capturing
//
// To debug our reading list, setUpTrail(list, trail) writes a line into the trail for
// every listener that runs: the node name of currentTarget and the eventPhase. It adds
// a listener on the list, on the book and on its button, and returns a stop() function
// that removes all three. We want the list to hear the click first, on the way down,
// and the book last, on the way up. Change the code so the list listens in the capture
// phase, and make sure stop() still removes every listener.
//
// Examples:
//   click the button   UL 1, BUTTON 2, LI 3
//   click the title    UL 1, LI 3
//   stop(), then click nothing is added to the trail
//
// Open the page: npm run serve, then 19-events/bubbling-and-capturing/tasks/02-click-trail.html

export function setUpTrail(list, trail) {
    const book = list.querySelector('li');
    const button = book.querySelector('button');

    function log(event) {
        const line = document.createElement('li');
        line.textContent = `${event.currentTarget.nodeName} ${event.eventPhase}`;
        trail.append(line);
    }

    list.addEventListener('click', log);
    book.addEventListener('click', log);
    button.addEventListener('click', log);

    return function stop() {
        list.removeEventListener('click', log);
        book.removeEventListener('click', log);
        button.removeEventListener('click', log);
    };
}
