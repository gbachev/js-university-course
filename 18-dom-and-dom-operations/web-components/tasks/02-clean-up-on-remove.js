// Task 2: Clean up on remove
// Lecture: Web Components: Custom Elements in Depth
//
// <seconds-counter> counts the seconds since it was inserted into the page: "0 s",
// "1 s", ... It starts a timer with setInterval() in connectedCallback(). When the page
// removes the element, the timer keeps running: a leak, and every insert adds one more.
// Stop the timer when the element leaves the page. Inserting it again starts counting
// from 0 with one new timer.
//
// Examples:
//   spot.append(counter)   // one timer runs, the text is "0 s"
//   counter.remove()       // no timer runs
//
// Open the page: run npm run serve, then open
//   18-dom-and-dom-operations/web-components/tasks/02-clean-up-on-remove.html

class SecondsCounter extends HTMLElement {
    connectedCallback() {
        this.seconds = 0;
        this.textContent = '0 s';
        this.timer = setInterval(() => {
            this.seconds += 1;
            this.textContent = `${this.seconds} s`;
        }, 1000);
    }

    // Your code here
}

customElements.define('seconds-counter', SecondsCounter);
