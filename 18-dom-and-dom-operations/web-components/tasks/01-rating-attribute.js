// Task 1: A rating that follows its attribute
// Lecture: Web Components: Custom Elements in Depth
//
// <star-rating value="3"> shows its value as five stars in its shadow root: ★★★☆☆.
// It renders once when it is inserted, but when the page changes the value attribute
// later, nothing happens. Make the element watch its value attribute and render again
// when it changes. render() is already written: it rounds the value and keeps it
// between 0 and 5, and a missing or invalid value shows no filled stars.
//
// Examples:
//   rating.setAttribute('value', '5')   // ★★★★★
//   rating.removeAttribute('value')     // ☆☆☆☆☆
//
// Open the page: run npm run serve, then open
//   18-dom-and-dom-operations/web-components/tasks/01-rating-attribute.html

class StarRating extends HTMLElement {
    // Your code here

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = '<span class="stars"></span>';
    }

    connectedCallback() {
        this.render();
    }

    // Your code here

    render() {
        const value = Math.min(5, Math.max(0, Math.round(Number(this.getAttribute('value')) || 0)));
        this.shadowRoot.querySelector('.stars').textContent = '★'.repeat(value) + '☆'.repeat(5 - value);
    }
}

customElements.define('star-rating', StarRating);
