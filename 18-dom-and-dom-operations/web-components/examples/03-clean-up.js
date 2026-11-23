// disconnectedCallback() clears the timer that connectedCallback() started.
const card = document.querySelector('book-card');

class SaleBadge extends HTMLElement {
    #timer;

    connectedCallback() {
        let left = 60;
        this.textContent = `Sale ends in ${left} s`;
        this.#timer = setInterval(() => {
            left -= 1;
            this.textContent = `Sale ends in ${left} s`;
            if (left === 0) {
                clearInterval(this.#timer);
            }
        }, 1000);
        console.log('timer started');
    }

    disconnectedCallback() {
        clearInterval(this.#timer);
        console.log('timer cleared');
    }
}

customElements.define('sale-badge', SaleBadge);

const badge = document.createElement('sale-badge');
document.body.append(badge); // timer started
badge.remove(); // timer cleared

card.before(badge); // timer started
document.body.append(badge);
// timer cleared
// timer started
