// The price property reflects to the price attribute, which is always a string.
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

customElements.define('book-card', BookCard);
const card = document.querySelector('book-card');

card.price = 28; // price 32.5 28
console.log(card.getAttribute('price')); // 28
console.log(typeof card.getAttribute('price')); // string
console.log(card.price + 2); // 30

card.setAttribute('price', 30); // price 28 30
console.log(card.price); // 30
console.log(card.shadowRoot.querySelector('.price').textContent); // 30 EUR
