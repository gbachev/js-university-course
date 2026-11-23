class RatingField extends HTMLElement {
    static formAssociated = true;
    #value = 0;
    #internals;

    constructor() {
        super();
        this.#internals = this.attachInternals();
        this.#internals.setFormValue('0');
    }

    connectedCallback() {
        this.textContent = `${this.#value} of 5`;
    }

    get value() {
        return this.#value;
    }

    set value(rating) {
        this.#value = rating;
        this.textContent = `${rating} of 5`;
        this.#internals.setFormValue(String(rating));
    }

    formResetCallback() {
        this.value = 0;
    }
}

customElements.define('rating-field', RatingField);
