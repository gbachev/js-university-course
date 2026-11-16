// Task 3: One listener for the list
// Lecture: Real-world Questions
//
// "How would you handle clicks on 1000 list items?" handleBookActions(list, onAction)
// below adds a listener to every button, so it makes one listener per book, and a
// book added later gets none. Rewrite it with event delegation: one click listener on
// list. A click on a button with a data-action (or on anything inside that button)
// calls onAction(action, id), where id is the data-id of the button's li. Clicks
// anywhere else do nothing. handleBookActions returns a function that removes the
// listener again, so the view can clean up when it closes.
//
// Examples:
//   const stop = handleBookActions(document.querySelector('#books'), console.log);
//   // clicking Favorite on the li with data-id="42": favorite 42
//   stop();
//   // clicks do nothing now
//
// Open the page: npm run serve, then
//   24-how-to-prepare-for-an-interview/real-world-questions/tasks/03-book-actions.html

export function handleBookActions(list, onAction) {
    for (const button of list.querySelectorAll('button[data-action]')) {
        button.addEventListener('click', () => {
            onAction(button.dataset.action, button.closest('li').dataset.id);
        });
    }
}
