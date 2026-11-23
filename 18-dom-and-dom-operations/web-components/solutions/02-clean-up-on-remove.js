class SecondsCounter extends HTMLElement {
    connectedCallback() {
        this.seconds = 0;
        this.textContent = '0 s';
        this.timer = setInterval(() => {
            this.seconds += 1;
            this.textContent = `${this.seconds} s`;
        }, 1000);
    }

    disconnectedCallback() {
        clearInterval(this.timer);
    }
}

customElements.define('seconds-counter', SecondsCounter);
