class BookCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        // Static markup we wrote ourselves, then the data as text.
        this.shadowRoot.innerHTML = `<p class="name"></p><p class="author"></p>`;
        this.shadowRoot.querySelector('.name').textContent = this.getAttribute('name');
        this.shadowRoot.querySelector('.author').textContent =
            `by ${this.getAttribute('author')}`;
    }
}

customElements.define('book-card', BookCard);
