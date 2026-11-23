// Task 3: A form-associated rating field
// Lecture: Web Components: Custom Elements in Depth
//
// <rating-field name="rating"> holds a rating from 0 to 5 in its value property. It sits
// inside a form, but new FormData(form) does not see it, and form.reset() leaves it as
// it is. Make it a form-associated custom element: its value goes into the form's data
// under its name (as a string, "0" at the start), and resetting the form sets it back
// to 0.
//
// Examples:
//   field.value = 4;
//   new FormData(form).get('rating')   // "4"
//   form.reset();                      // field.value is 0, FormData gives "0"
//
// Open the page: run npm run serve, then open
//   18-dom-and-dom-operations/web-components/tasks/03-form-field.html

class RatingField extends HTMLElement {
    // Your code here
    #value = 0;

    constructor() {
        super();
        // Your code here
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
        // Your code here
    }

    // Your code here
}

customElements.define('rating-field', RatingField);
