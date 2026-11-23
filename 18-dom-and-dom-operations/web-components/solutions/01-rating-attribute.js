class StarRating extends HTMLElement {
    static observedAttributes = ['value'];

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = '<span class="stars"></span>';
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback() {
        this.render();
    }

    render() {
        const value = Math.min(5, Math.max(0, Math.round(Number(this.getAttribute('value')) || 0)));
        this.shadowRoot.querySelector('.stars').textContent = '★'.repeat(value) + '☆'.repeat(5 - value);
    }
}

customElements.define('star-rating', StarRating);
