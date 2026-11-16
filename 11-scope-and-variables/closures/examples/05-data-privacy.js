function createCounter() {
    let count = 0;

    return {
        increment() { count++; },
        decrement() { count--; },
        value() { return count; }
    };
}

const counter = createCounter();
counter.increment();
console.log(counter.value()); // 1
console.log(counter.count); // undefined
