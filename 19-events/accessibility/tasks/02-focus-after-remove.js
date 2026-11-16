// Task 2: Keep the focus in place
// Lecture: Accessibility Basics
//
// Each book on our list has a "Remove" button, and one delegated listener removes the
// row. It works with the mouse, but after a keyboard user presses "Remove" the focused
// button is gone and the focus falls back to document.body. Fix setUpRemove(list,
// heading): after removing a row, move the focus to the "Remove" button of the next
// row, or of the previous row when we removed the last one. When no book is left, the
// focus goes to the heading, which cannot take the focus yet: make focus() work on it
// while Tab still skips it.
//
// Examples, starting with Dune, Emma, Neuromancer and Hyperion:
//   Remove on Emma            // the focus is on Neuromancer's button, the next row
//   then Remove on Hyperion   // the focus is on Neuromancer's button, the previous row
//   Remove on the last book   // the focus is on the heading
//
// Open the page: npm run serve, then 19-events/accessibility/tasks/02-focus-after-remove.html

export function setUpRemove(list, heading) {
    list.addEventListener('click', (event) => {
        const button = event.target.closest('button');
        if (!button) {
            return;
        }
        button.closest('li').remove();
    });
}
