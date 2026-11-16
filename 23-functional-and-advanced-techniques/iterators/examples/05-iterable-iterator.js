// An iterable iterator: [Symbol.iterator]() returns this, so it is used up after one pass.
class Countdown {
    constructor(from) {
        this.current = from;
    }

    next() {
        if (this.current > 0) {
            return { value: this.current--, done: false };
        }
        return { value: undefined, done: true };
    }

    [Symbol.iterator]() {
        return this;
    }
}

const countdown = new Countdown(3);

console.log(countdown.next().value); // 3
console.log([...countdown]); // [ 2, 1 ]
console.log([...countdown]); // []
