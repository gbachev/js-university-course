// The book-card of the previous snippet, with slots.
class BookCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        const price = this.getAttribute('price');
        this.shadowRoot.innerHTML = `
            <p><slot>Untitled</slot></p>
            <p>by <slot name="author">unknown</slot></p>
            <p class="price"></p>
        `;
        this.shadowRoot.querySelector('.price').textContent = `${price} EUR`;
    }
}

customElements.define('book-card', BookCard);

// :host styles the card itself, :host(.sale) only while it has the class sale.
const card = document.querySelector('book-card');
console.log(getComputedStyle(card).display); // inline

const style = document.createElement('style');
style.textContent = `
    :host { display: block; border: 2px solid gray; }
    :host(.sale) { border-color: orange; }
`;
card.shadowRoot.prepend(style);
console.log(getComputedStyle(card).display); // block

card.classList.add('sale');
console.log(getComputedStyle(card).borderTopColor);
// rgb(255, 165, 0)
