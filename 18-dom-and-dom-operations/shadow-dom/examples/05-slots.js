// Slots show the light DOM children of the card inside its shadow tree.
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

const card = document.querySelector('book-card');
const [title, author] = card.shadowRoot.querySelectorAll('slot');

console.log(title.assignedElements()[0].nodeName); // STRONG
console.log(author.assignedElements()[0].textContent);
// Jane Doe
console.log(document.querySelector('book-card strong').textContent);
// Async Nights
