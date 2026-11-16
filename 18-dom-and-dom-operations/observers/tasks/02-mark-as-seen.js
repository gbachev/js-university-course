// Task 2: Mark as seen
// Lecture: MutationObserver and IntersectionObserver
//
// A notification counts as seen once half of it shows on the screen. Write
// markWhenSeen(items): watch every element of items with one IntersectionObserver, and
// when half of an item shows, set its data-status to "seen" and stop watching it, so it
// is never counted twice. Return the observer. Items below the screen stay "new" until we
// scroll to them.
//
// Examples:
//   markWhenSeen(document.querySelectorAll('#inbox li'));
//   // the first notification turns "seen", the others once we scroll down
//
// Open the page: run npm run serve, then open
//   18-dom-and-dom-operations/observers/tasks/02-mark-as-seen.html

export function markWhenSeen(items) {
    // Your code here
}
