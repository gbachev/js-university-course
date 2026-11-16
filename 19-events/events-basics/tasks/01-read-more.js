// Task 1: Read more, in place
// Lecture: Events Basics
//
// A "Read more" link shows the description of a book right below it. The link keeps its
// href, so it still jumps to the description when JavaScript is off. setUpReadMore(link,
// description) adds a click listener that shows the description and changes the link
// text to "Read less", and a second click hides it again. It works, but every click
// also follows the link: the address gets #description and the page jumps. Fix it, so
// a click only toggles the description. The description is shown when its hidden
// property is false and hidden when it is true.
//
// Examples:
//   first click    the description shows, the link says "Read less"
//   second click   the description hides, the link says "Read more"
//
// Open the page: npm run serve, then 19-events/events-basics/tasks/01-read-more.html

export function setUpReadMore(link, description) {
    link.addEventListener('click', () => {
        description.hidden = !description.hidden;
        link.textContent = description.hidden ? 'Read more' : 'Read less';
    });
}
