// Task 3: Our own validation messages
// Lecture: Forms and Input Events
//
// Our "Add a book" form shows its own messages in the error paragraph instead of the
// browser's bubbles, so setUpValidation(form, list, error) turns the browser's check
// off and listens for submit. Finish the listener. We take the title without spaces
// around it. An empty title shows "Enter a title". A title already on the list, upper
// or lower case, shows "Already on your list" and marks the field invalid with
// setCustomValidity(). Any other title is added to the list as an li, the error
// paragraph and the field are emptied, and the field is valid again.
//
// Examples:
//   ''             "Enter a title", nothing added
//   'dune'         "Already on your list", the field is invalid
//   'Persuasion'   added, no message
//
// Open the page: npm run serve, then 19-events/forms-and-input-events/tasks/03-validation-messages.html

export function setUpValidation(form, list, error) {
    const title = form.elements.title;
    form.noValidate = true;

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        // Your code here
    });
}
