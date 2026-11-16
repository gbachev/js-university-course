// Task 1: Mark read, and count it
// Lecture: Bubbling and Capturing
//
// A click on a book selects it (class "selected"), and its "Mark read" button toggles
// the class "is-read" on the book without selecting it. trackClicks(output) counts every
// click on the page for our statistics, with a listener on document. setUpList(list)
// gets the book part right, but the button calls stopPropagation(), so its clicks never
// reach document and the counter misses them. Fix setUpList(): no stopPropagation(),
// and the book's own listener ignores clicks that came from its button. Leave
// trackClicks() as it is.
//
// Examples:
//   click "Mark read" on Dune   Dune is read, not selected, the counter says 1
//   click the title Emma        Emma is selected, the counter says 2
//
// Open the page: npm run serve, then 19-events/bubbling-and-capturing/tasks/01-mark-read.html

export function trackClicks(output) {
    let clicks = 0;
    document.addEventListener('click', () => {
        clicks++;
        output.textContent = String(clicks);
    });
}

export function setUpList(list) {
    for (const book of list.querySelectorAll('li')) {
        book.addEventListener('click', () => {
            list.querySelector('.selected')?.classList.remove('selected');
            book.classList.add('selected');
        });
    }

    for (const button of list.querySelectorAll('button')) {
        button.addEventListener('click', (event) => {
            event.stopPropagation();
            button.closest('li').classList.toggle('is-read');
        });
    }
}
