// Task 2: The book-card element
// Lecture: Shadow DOM
//
// Finish the custom element <book-card name="..." author="...">. The constructor attaches
// an open shadow root. When the card is inserted into the page, it shows two paragraphs
// in its shadow root: a p with the class name holding the name, and a p with the class
// author holding "by " and the author. Names come from users, so they go in as text.
//
// Examples:
//   <book-card name="Clean Code" author="Robert C. Martin"></book-card>
//   // shows: Clean Code / by Robert C. Martin
//
// Open the page: run npm run serve, then open
//   18-dom-and-dom-operations/shadow-dom/tasks/02-book-card.html

class BookCard extends HTMLElement {
    constructor() {
        super();
        // Your code here
    }

    connectedCallback() {
        // Your code here
    }
}

customElements.define('book-card', BookCard);
