// Task 1: A div that works like a button
// Lecture: Accessibility Basics
//
// The "Clear list" control on our reading list is a div whose markup comes from a
// library we cannot change, so a <button> is not an option this time. It answers a
// click, but Tab never reaches it and a screen reader reads it as plain text. Finish
// makeKeyboardButton(element): give the element the button role, put it in the Tab
// order, and make Enter and Space press it by calling element.click(). Space must not
// scroll the page, so we stop its default action. Other keys do nothing.
//
// Examples:
//   makeKeyboardButton(clear)
//   clear.tabIndex                 // 0
//   Enter or Space on "Clear list" // runs its click listeners, the list is empty
//
// Open the page: npm run serve, then 19-events/accessibility/tasks/01-keyboard-button.html

export function makeKeyboardButton(element) {
    // Your code here
}
