// Task 3: Name it and say it
// Lecture: Accessibility Basics
//
// Our "Add a book" form adds a row with the title and a "Remove" button. Finish
// setUpAdd(form, list, status) so a screen reader user hears what happened. First
// turn the status paragraph into a polite live region, before anything is written into
// it. On submit, a title (without spaces around it) becomes a new li: the title, a
// space, and a "Remove" button whose name starts with its text, "Remove Dune". The
// status then says "Dune added, 2 books" and the form is emptied. An empty title adds
// nothing: the status says "Type a title first." and the focus goes to the title field.
//
// Examples:
//   ' Dune '   <li>Dune <button aria-label="Remove Dune">Remove</button></li>
//              status: "Dune added, 2 books"
//   ''         status: "Type a title first.", the focus is on the title field
//
// Open the page: npm run serve, then 19-events/accessibility/tasks/03-add-and-announce.html

export function setUpAdd(form, list, status) {
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        // Your code here
    });
}
