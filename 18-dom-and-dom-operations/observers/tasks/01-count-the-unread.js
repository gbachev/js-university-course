// Task 1: Count the unread
// Lecture: MutationObserver and IntersectionObserver
//
// A chat widget we do not control adds and removes notifications in our inbox, and
// changes their data-status from "new" to "seen". Write watchUnread(inbox, counter): it
// sets the text of counter to the number of li elements in inbox with data-status="new",
// right away and again after every such change. Use a MutationObserver and return it, so
// we can disconnect it later.
//
// Examples:
//   watchUnread(document.querySelector('#inbox'), document.querySelector('#unread'));
//   // the counter shows 2, and 3 once the widget adds a new notification
//
// Open the page: run npm run serve, then open
//   18-dom-and-dom-operations/observers/tasks/01-count-the-unread.html

export function watchUnread(inbox, counter) {
    // Your code here
}
