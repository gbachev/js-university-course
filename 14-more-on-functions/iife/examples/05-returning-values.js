// The IIFE returns an object whose functions close over the private count.
const counter = (function () {
    let count = 0;

    function increment() {
        count++;
        return count;
    }

    function reset() {
        count = 0;
    }

    return { increment, reset };
})();

console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
counter.reset();
console.log(counter.increment()); // 1
