// Each method returns this, so we can call the next method right after it.
let allowsChaining = {
    count: 0,
    increment() {
        this.count++;
        return this;
    },
    reset() {
        this.count = 0;
        return this;
    }
};

allowsChaining.increment().increment();
console.log(allowsChaining.count); // 2
allowsChaining.increment().increment().reset(); // increments from 2 to 4, then resets to 0
console.log(allowsChaining.count); // 0
