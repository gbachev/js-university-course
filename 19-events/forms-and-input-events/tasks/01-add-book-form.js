// Task 1: Add a book with FormData
// Lecture: Forms and Input Events
//
// Our "Add a book" form has a title, a shelf and two tags. Finish the submit listener
// in setUpForm(form, list): read the form with FormData and add an li to the list. Its
// text is the title without spaces around it, data-shelf holds the shelf, and
// data-tags holds the checked tags joined with a comma, or an empty string when none
// is checked. Then empty the form with form.reset(), ready for the next book. The
// listener already stops the page reload.
//
// Examples:
//   ' Dune ', reading, sci-fi   <li data-shelf="reading" data-tags="sci-fi">Dune</li>
//   Emma, to-read, no tags      <li data-shelf="to-read" data-tags="">Emma</li>
//
// Open the page: npm run serve, then 19-events/forms-and-input-events/tasks/01-add-book-form.html

export function setUpForm(form, list) {
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        // Your code here
    });
}
