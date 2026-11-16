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
        // Our own events do not bubble unless we ask.
        rating.dispatchEvent(new CustomEvent('book:rated', { detail, bubbles: true }));
    });
}

export function showLastRating(list, output) {
    list.addEventListener('book:rated', (event) => {
        const { key, stars } = event.detail;
        output.textContent = `${key}: ${stars} ${stars === 1 ? 'star' : 'stars'}`;
    });
}
