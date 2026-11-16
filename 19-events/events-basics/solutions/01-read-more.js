export function setUpReadMore(link, description) {
    link.addEventListener('click', (event) => {
        // The link would jump to #description; we toggle the text instead.
        event.preventDefault();
        description.hidden = !description.hidden;
        link.textContent = description.hidden ? 'Read more' : 'Read less';
    });
}
