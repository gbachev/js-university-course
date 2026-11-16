// Task 3: The active field
// Lecture: Bubbling and Capturing
//
// Our "Add a book" form highlights the field we are typing in: the div.field around the
// focused input gets the class "active", and loses it when the focus leaves. With
// highlightFields(form) we want one pair of listeners on the form, not one per input.
// It listens for focus and blur on the form, and nothing gets highlighted. Fix it, so
// the form hears the focus moving between its inputs. The Add button sits outside any
// field: focusing it must not throw.
//
// Examples:
//   focus the title       the title field is active
//   focus the author      the author field is active, the title field is not
//   leave the form        no field is active
//
// Open the page: npm run serve, then 19-events/bubbling-and-capturing/tasks/03-active-field.html

export function highlightFields(form) {
    form.addEventListener('focus', (event) => {
        event.target.closest('.field').classList.add('active');
    });

    form.addEventListener('blur', (event) => {
        event.target.closest('.field').classList.remove('active');
    });
}
