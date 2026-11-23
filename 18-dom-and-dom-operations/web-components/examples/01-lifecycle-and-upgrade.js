// The book-card of the lecture: the lifecycle callbacks log when they run.
class BookCard extends HTMLElement {
    static observedAttributes = ['price'];

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <p><slot>Untitled</slot></p>
            <p>by <slot name='author'>unknown</slot></p>
            <p class='price'></p>
        `;
        console.log('constructor');
    }

    connectedCallback() {
        console.log('connected');
    }

    disconnectedCallback() {
        console.log('disconnected');
    }

    attributeChangedCallback(name, oldValue, newValue) {
        console.log(name, oldValue, newValue);
        this.shadowRoot.querySelector('.price').textContent =
            `${newValue} EUR`;
    }

    get price() {
        return Number(this.getAttribute('price'));
    }

    set price(value) {
        this.setAttribute('price', value);
    }
}

const card = document.querySelector('book-card');
console.log(customElements.get('book-card')); // undefined
console.log(card.shadowRoot); // null

customElements.whenDefined('book-card').then(() => {
    console.log('book-card is ready');
});

customElements.define('book-card', BookCard);
// constructor
// price null 32.5
// connected

console.log(customElements.get('book-card') === BookCard); // true
console.log(card instanceof BookCard); // true

card.remove(); // disconnected
document.body.append(card); // connected
// book-card is ready
