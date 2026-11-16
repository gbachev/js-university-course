// The arrow function keeps the this of the constructor, the new Counter object.
class Counter {
    constructor() {
        this.count = 0;
        const timer = setInterval(() => {
            this.count++;
            console.log(this.count);

            // Added so the example stops after 3 ticks.
            if (this.count === 3) {
                clearInterval(timer);
            }
        }, 1000);
    }
}

new Counter();
// 1
// 2
// 3 (one number every second)
