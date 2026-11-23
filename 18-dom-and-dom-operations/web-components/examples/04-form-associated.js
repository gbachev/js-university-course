// A form-associated custom element: its value goes into FormData and form.reset().
class CopiesField extends HTMLElement {
    static formAssociated = true;
    #internals;
    #count;

    constructor() {
        super();
        this.#internals = this.attachInternals();
        this.attachShadow({ mode: 'open' });
        this.value = 1;
    }

    get value() {
        return this.#count;
    }

    set value(count) {
        this.#count = count;
        this.shadowRoot.textContent = `Copies: ${count}`;
        this.#internals.setFormValue(String(count));
    }

    get form() {
        return this.#internals.form;
    }

    formResetCallback() {
        this.value = 1;
    }
}

customElements.define('copies-field', CopiesField);

const form = document.createElement('form');
const title = document.createElement('input');
title.name = 'title';
title.value = 'Clean Code';
const copies = document.createElement('copies-field');
copies.setAttribute('name', 'copies');
form.append(title, copies);
document.body.append(form);

copies.value = 3;
const order = Object.fromEntries(new FormData(form));
console.log(order.title, order.copies); // Clean Code 3
console.log(copies.form === form); // true

form.reset();
console.log(copies.value); // 1
console.log(new FormData(form).get('copies')); // 1
