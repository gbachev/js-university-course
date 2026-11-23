import { check, equal, source } from '/lib/browser-check.js';

await import(source('01-rating-attribute.js'));
const rating = document.querySelector('star-rating');
const stars = () => rating.shadowRoot.querySelector('.stars').textContent;

check('the page starts with three stars', () => {
    equal(stars(), '★★★☆☆');
});

check('a new value shows without inserting the element again', () => {
    rating.setAttribute('value', '5');
    equal(stars(), '★★★★★');
});

check('a value above 5 shows five stars', () => {
    rating.setAttribute('value', '9');
    equal(stars(), '★★★★★');
});

check('removing the value shows no filled stars', () => {
    rating.removeAttribute('value');
    equal(stars(), '☆☆☆☆☆');
});

check('the element watches only its value attribute', () => {
    equal(customElements.get('star-rating').observedAttributes.join(), 'value');
});
