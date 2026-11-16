// Task 3: Tell the page about the rating
// Lecture: Custom Events and EventTarget
//
// Every book on our reading list has a small rating widget with three star buttons.
// setUpRating(rating) is the widget's code: a click on a star dispatches a
// "book:rated" event on the widget, with the book's key and the stars in its detail.
// showLastRating(list, output) is the page's code: one listener on the list shows the
// last rating, like "dune: 3 stars". The page never hears a rating. Fix setUpRating()
// so its event reaches the list. Leave showLastRating() as it is.
//
// Examples:
//   click the third star of Dune   the page shows "dune: 3 stars"
//   click the first star of Emma   the page shows "emma: 1 star"
//
// Open the page: npm run serve, then 19-events/custom-events/tasks/03-book-rated.html

export function setUpRating(rating) {
    rating.addEventListener('click', (event) => {
        const star = event.target.closest('[data-stars]');
        if (!star) {
            return;
        }
        const detail = {
            key: rating.closest('li').dataset.key,
            stars: Number(star.dataset.stars),
        };
        rating.dispatchEvent(new CustomEvent('book:rated', { detail }));
    });
}

export function showLastRating(list, output) {
    list.addEventListener('book:rated', (event) => {
        const { key, stars } = event.detail;
        output.textContent = `${key}: ${stars} ${stars === 1 ? 'star' : 'stars'}`;
    });
}
