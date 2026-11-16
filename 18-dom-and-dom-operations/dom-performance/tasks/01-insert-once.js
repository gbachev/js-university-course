// Task 1: Insert once
// Lecture: DOM Performance Tips (Reflows, Repaints, DocumentFragment)
//
// addBooks(list, titles) adds an li for each title at the end of list. It appends the
// rows one by one, so the live page changes once per book. Change it so the list changes
// only once: build the rows in a DocumentFragment first, then insert the fragment. The
// titles go in as text, and an empty array adds nothing.
//
// Examples:
//   addBooks(list, ['Ulysses', 'Persuasion', 'Neuromancer']);
//   // the list now has 5 rows, inserted in one change
//
// Open the page: run npm run serve, then open
//   18-dom-and-dom-operations/dom-performance/tasks/01-insert-once.html

export function addBooks(list, titles) {
    for (const title of titles) {
        const row = document.createElement('li');
        row.textContent = title;
        list.append(row);
    }
}
