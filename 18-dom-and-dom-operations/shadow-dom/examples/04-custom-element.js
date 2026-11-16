// A custom element is a class that extends HTMLElement. connectedCallback() runs on insert.
class BookCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        const price = this.getAttribute('price');
        this.shadowRoot.innerHTML = `<p class="price"></p>`;
        this.shadowRoot.querySelector('.price').textContent = `${price} EUR`;
        console.log('connected');
    }
}

customElements.define('book-card', BookCard);

const card = document.createElement('book-card');
card.setAttribute('price', '32.5');
console.log(card.shadowRoot.children.length); // 0

document.body.append(card); // connected
console.log(card.shadowRoot.textContent); // 32.5 EUR
console.log(card instanceof HTMLElement); // true
